using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Satvasoft.API.Entities
{
    public class PortfolioResultEntity
    {
        public int ResultId { get; set; }
        public string ResultText { get; set; }
        public int PortfolioId { get; set; }
    }
}