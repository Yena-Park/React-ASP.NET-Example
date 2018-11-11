using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using System.Text.Encodings.Web;

using mapsted.Models;
using mapsted.Utils;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace mapsted.Controllers
{
    [Produces("application/json")]
    [Route("api/")]
    public class SortController : Controller
    {
        [HttpPost("[action]")]
        public JsonResult Sort([FromBody] SortItem sortItem)
        {
            string[] splitValues = sortItem.InputValue.Split(',');
            int[] intValues;

            if (splitValues.Length == 0 || splitValues.Length > 500) {
                return Json(new { success = false, error = "Input size is 1 to 500 values." });
            }

            switch(sortItem.InputTypeValue) {
                case "int":
                    if (!ValidateNumbers(splitValues))
                        return Json(new { success = false, error = "Invalid Numbers(not integer size)" });

                    intValues = Array.ConvertAll(splitValues, (string value) =>
                    {
                        return int.Parse(value);
                    });

                    return Json(new { success = true, data = InsertionSort.SortIntArray(intValues) });
                case "string":
                    if (!ValidateStrings(splitValues))
                        return Json(new { success = false, error = "String values are up to 10 characters long." });

                    return Json(new { success = true, data = InsertionSort.SortStringArray(splitValues) });
                default:
                    return Json(new { success = false, error = "Invalid input type." });
            }
        }

        private bool ValidateStrings(string[] values)
        {
            foreach(string value in values) {
                if (value.Length > 10 ) {
                    return false;
                }
            }
            return true; 
        }

        private bool ValidateNumbers(string[] values){
            long num64 = new long();
            foreach(string value in values) {
                if(!(long.TryParse(value, out num64))) {
                    return false;
                } else if(num64 > int.MaxValue) {
                    return false;
                } else if(num64 < int.MinValue) {
                    return false;
                }
            }
            return true;
        }
    }
}
