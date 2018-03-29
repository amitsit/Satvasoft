using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Satvasoft.API.Entities
{
    public class PortfolioObjectiveEntity
    {
        public int ObjectiveId { get; set; }
        public string ObjectiveText { get; set; }
        public int PortfolioId { get; set; }
    }
}