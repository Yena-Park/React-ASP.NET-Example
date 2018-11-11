using System;
using System.Collections.Generic;

namespace mapsted.Models
{
    public class SortedResult
    {
        public SortedResult()
        {
            this.Steps = new List<string>();
        }
        public List<string> Steps { get; set; }
    }
}
