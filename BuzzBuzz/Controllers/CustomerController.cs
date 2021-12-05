﻿using Microsoft.AspNetCore.Mvc;
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

        private List<Models.Product> GetProducts(string customerID)
        {
            using (BuzzBuzz.Models.TestContext context = new Models.TestContext())
            {
                return context.Product
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
        public List<Models.Product> Products(string customerID)
        {
            return GetProducts(customerID);
        }
    }
}
