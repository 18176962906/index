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
            ListViewModel lvm = new ListViewModel();
            lvm.MusicViewList = mvmList();
            return View(lvm);
            //MusicViewModel mvm = new MusicViewModel();
            //Music m = new Music();
            //mvm.UserName = m.UserName;
            //mvm.MusicName = m.Musics;
            
        }
        [NonAction]
        //获取列表
        List<MusicViewModel > mvmList()
        {
            //实例化员工信息业务层
            MusicBusiness mb = new MusicBusiness();
            //员工原始数据列表，获取来自业务层类的数据
            var listm = mb.GetMusicList();
            //员工原始数据加工后的视图数据列表，当前状态是空的
            var listmVm = new List<MusicViewModel >();
            //通过循环遍历员工原始数据数组，将数据一个一个的转换，并加入listEmpVm
            foreach (var item in listm)
            {
                MusicViewModel mVmObj = new MusicViewModel();
                mVmObj.ID = item.ID;
                mVmObj.MusicName = item.Musics;
                mVmObj.UserName = item.UserName ;
                listmVm.Add(mVmObj);
            }
            return listmVm;

        }
        public ActionResult SomeAction()
        {
            ViewBag.Greeting = "Hello";
            ViewBag.Music = new 
            {
                Musics  = "你好",
                UserName = "我啊",
            };
            return View();
        }
        public ActionResult Save(Music m)
        {
            MusicBusiness mb = new MusicBusiness();
            mb.Addm(m);
            return new RedirectResult("~/Music/Index");
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
        public ActionResult Add()
        {
            return View();
        }
        public ActionResult Ranking()
        {
            ListViewModel lvm = new ListViewModel();
            lvm.MusicViewList = mvmList();
            return View(lvm);
        }
        public ActionResult Singer()
        {
            ListViewModel lvm = new ListViewModel();
            lvm.MusicViewList = mvmList();
            return View(lvm);
        }
        public ActionResult songsheet()
        {
            ListViewModel lvm = new ListViewModel();
            lvm.MusicViewList = mvmList();
            return View(lvm);
        }


    }
}