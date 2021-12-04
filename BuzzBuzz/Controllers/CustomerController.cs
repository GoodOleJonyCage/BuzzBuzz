using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BuzzBuzz.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CustomerController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        [Route("customers")]
        public List<Models.Customer> Customers()
        {
            List<Models.Customer> vm = new List<Models.Customer>();

            vm.Add(new Models.Customer() { ID = 1, Name = "Khan" });
            vm.Add(new Models.Customer() { ID = 2, Name = "Sam" });

            return vm;
        }
    }
}
