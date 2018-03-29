// --------------------------------------------------------------------------------------------------------------------
// <copyright file="DefaultRouteHandler.cs" company="Microsoft">
//   Copyright © 2017 Microsoft
// </copyright>
// --------------------------------------------------------------------------------------------------------------------

namespace Satvasoft.Web.Routing
{
    using System;
    using System.Web;
    using System.Web.Routing;
    using System.Web.WebPages;

    public class DefaultRouteHandler : IRouteHandler
    {
        public IHttpHandler GetHttpHandler(RequestContext requestContext)
        {
            var filePath = requestContext.HttpContext.Request.AppRelativeCurrentExecutionFilePath;

            if (filePath == "~/")
            {
                filePath = "~/views/SCIndex.cshtml";
            }
            else
            {
                if (!filePath.StartsWith("~/views/", StringComparison.OrdinalIgnoreCase))
                {
                    if (filePath.StartsWith("~/portfolio-detail/ShaligramInfotechAPI/api/PortfolioApi/", StringComparison.OrdinalIgnoreCase))
                    {
                        filePath = filePath.Replace("portfolio-detail/", "");
                    }
                    else
                    {
                        if (filePath.StartsWith("~/portfolio-detail", StringComparison.OrdinalIgnoreCase))
                        {
                            filePath = "~/views/GetParticularPortfolioDetail";
                        }
                        else if (filePath.Equals("~/subscribe", StringComparison.OrdinalIgnoreCase))
                        {
                            filePath = "~/views/Subscription";
                        }
                        else if (filePath.Equals("~/portfolio", StringComparison.OrdinalIgnoreCase))
                        {
                            filePath = "~/views/portfolio-index";
                        }
                        else if (filePath.Equals("~/portfolio/true", StringComparison.OrdinalIgnoreCase))
                        {
                            filePath = "~/views/portfolio-index";
                        }
                        else if (filePath.StartsWith("~/blog", StringComparison.OrdinalIgnoreCase))
                        {
                            filePath = "~/views/BlogPost";
                        }
                        else if (filePath.Equals("~/pricing-comparison-uk", StringComparison.OrdinalIgnoreCase))
                        {
                            filePath = "~/views/pricecomparisonuk";
                        }
                        else if (filePath.Equals("~/pricing-comparison-aus", StringComparison.OrdinalIgnoreCase))
                        {
                            filePath = "~/views/pricecomparisonaus";
                        }
                        else if (filePath.Equals("~/pricing-comparison-us", StringComparison.OrdinalIgnoreCase))
                        {
                            filePath = "~/views/pricecomparisonus";
                        }
                        else
                        {
                            filePath = filePath.Insert(2, "views/");
                        }
                    }

                }

                if (!filePath.EndsWith(".cshtml", StringComparison.OrdinalIgnoreCase))
                {
                    filePath = filePath += ".cshtml";
                }
            }

            var handler = WebPageHttpHandler.CreateFromVirtualPath(filePath); // returns NULL if .cshtml file wasn't found

            if (handler == null)
            {
                requestContext.RouteData.DataTokens.Add("templateUrl", "/views/404");
                handler = WebPageHttpHandler.CreateFromVirtualPath("~/views/404.cshtml");
            }
            else
            {
                requestContext.RouteData.DataTokens.Add("templateUrl", filePath.Substring(1, filePath.Length - 8));
            }

            return handler;
        }
    }
}
