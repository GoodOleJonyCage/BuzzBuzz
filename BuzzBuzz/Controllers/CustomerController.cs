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

        private List<Models.Customer> GetCustomers()
        {
            List<Models.Customer> vm = new List<Models.Customer>();
            using (BuzzBuzz.Models.TestContext context = new Models.TestContext())
            {
                vm = context.Customer.ToList();
            }
            return vm;
        }

        private List<Models.CustomerProduct> GetProducts(string customerID)
        {
            using (BuzzBuzz.Models.TestContext context = new Models.TestContext())
            {
                return context.CustomerProduct
                    .Where(p => p.CustomerId.Value.ToString() == customerID)
                    .ToList();

            }
        }

        [HttpGet]
        [Route("customers")]
        public List<Models.Customer> Customers()
        {
            return GetCustomers();
        }

        [HttpGet]
        [Route("customerinfo")]
        public Models.Customer CustomerInfo(string customerID)
        {
            return GetCustomers().Where(c => c.Id.ToString() == customerID).SingleOrDefault(); 
        }

        [HttpGet]
        [Route("products")]
        public List<Models.CustomerProduct> Products(string customerID)
        {
            return GetProducts(customerID);
        }

        [HttpGet]
        [Route("deleteproduct")]
        public void DeleteProduct(string productID)
        {
            using (BuzzBuzz.Models.TestContext context = new Models.TestContext())
            {
                context.CustomerProduct.RemoveRange(context.CustomerProduct.Where(p => p.Id.ToString() == productID));
                context.SaveChanges();
            }
        }

        [HttpPost]
        [Route("addproduct")]
        public Models.Json AddProduct(Models.CustomerProduct product)
        {
            Models.Json vm = new Models.Json();
            try
            {
                using (BuzzBuzz.Models.TestContext context = new Models.TestContext())
                {
                    context.CustomerProduct.Add(new Models.CustomerProduct()
                    {
                        CustomerId = product.CustomerId,
                        Name = product.Name,
                        Price = product.Price,
                    });
                    context.SaveChanges();
                }
            }
            catch (Exception exc)
            {
              vm.Error = exc.Message;
            }
            return vm;
        }
        
    }
}
