using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication1.DAL;
using WebApplication1.Models;
using WebApplication1.ViewModel;

namespace WebApplication1.Controllers
{
    public class MusicController : Controller
    {
        // GET: Employee
        public ActionResult Index()
        {
            MusicBusiness mb = new MusicBusiness();
            mb.Query();
            return View(mb);
        }
        public ActionResult Save(Music m)
        {
            MusicBusiness mb = new MusicBusiness();
            mb.Addm(m);
            return new RedirectResult("index");
        }
        public ActionResult Select(string name)
        {
            MusicViewModel mv = new MusicViewModel();
            mv.UserName = name;
            return View("Index",name);
        }
        public ActionResult Quert()
        {
            MusicBusiness mb = new Models.MusicBusiness();
            var ms = mb.Query();
            foreach (var item in ms)
            {
                Console.WriteLine(item.Musics  + "" + item.UserName );
            }
            return View();
        }
        public ActionResult Login()
        {
            return View();
        }
    }
}