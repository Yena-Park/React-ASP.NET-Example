﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace mapsted.Controllers
{
    public class SortController : Controller
    {
        // GET: /<controller>/
        public string Index()
        {
            return "This is my default action...";
        }

        // GET: /Sort/Welcome
        public string Welcome()
        {
            return "This is the Welcome aiction method...";
        }
    }
}
