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

        [HttpGet]
        [Route("customerinfo")]
        public Models.Customer CustomerInfo(string customerID)
        {
            Models.Customer vm = new Models.Customer();

            List<Models.Customer> lst = new List<Models.Customer>();
            lst.Add(new Models.Customer() { ID = 1, Name = "Khan" });
            lst.Add(new Models.Customer() { ID = 2, Name = "Sam" });

            vm = lst.Where(x => x.ID == Int32.Parse(customerID)).SingleOrDefault();

            return vm;
        }


        [HttpGet]
        [Route("products")]
        public List<Models.Product> Products(string customerID)
        {
            List<Models.Product> lst = new List<Models.Product>();
            for (int i = 0; i < 100; i++)
            {
                lst.Add(new Models.Product() { ID = i , Name = i.ToString(), Price=(i*2)  });
            }
            return lst;
        }
    }
}
