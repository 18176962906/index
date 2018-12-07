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
            ct.CustomerName = "abc";
            ct.Address = "def";
            return ct;
        }
        public ActionResult GetView()
        {
            string greeting;
            DateTime dt = DateTime.Now;
            int hour = dt.Hour;
            if (hour < 11)
            {
                greeting = "早上好！";
            }
            else if( hour <13)
            {
                greeting = "中午好！";
            }
            else
            {
                greeting = "下午好！";
            }
            ViewData["greeting"] = greeting;


            Employee emp = new Models.Employee();
            emp.Name = "小明";
            emp.Salary = 2000;
            ViewData["Employee"] = emp;
            return View("MyView");

        }

    }
}