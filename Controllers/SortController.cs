using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using System.Text.Encodings.Web;

using mapsted.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace mapsted.Controllers
{
    //[Route("api/[controller]")]
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

        public string Sort(string type, string value)
        {
            return HtmlEncoder.Default.Encode($"{type} {value}");
        }


        public ActionResult<SortedResult> Sort2(string type, string value)
        {
            SortedResult result = new SortedResult();
            result.Steps = new[] { "1,1,2,3,4,5,6", "1,1,2,3,4,5,6", "1,1,2,3,4,5,6" };

            return result;
        }

        [HttpGet("{id}", Name = "GetTodo")]
        public ActionResult<SortedResult> GetById(long id)
        {
            var item = new SortedResult();
            item.Steps = new[] { "1,1,2,3,4,5,6", "1,1,2,3,4,5,6", "1,1,2,3,4,5,6" };


            return item;
        }

    }
}
