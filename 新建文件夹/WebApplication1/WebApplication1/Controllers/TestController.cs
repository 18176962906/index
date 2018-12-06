using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication1.Models;


namespace WebApplication1.Controllers
{
    public class TestController : Controller
    {
        // GET: Test
        public string GetString()
        {
            return "hello world! MVC!";
        }
        public Customer GetCustomer()
        {
            Customer ct = new Customer();
            ct.CustomerNmae = "abc";
            ct.Address = "def";
            return ct;
        }
    }
}