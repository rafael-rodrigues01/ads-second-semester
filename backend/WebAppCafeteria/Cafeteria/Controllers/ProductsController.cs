using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;

namespace Cafeteria.Controllers;

public class ProductsController : Controller
{
    // 
	    // GET: /Products/
    public IActionResult Index()
{
    return View();
}

 // 
    // GET: /Products/Welcome/ 
    // GET: /Products/Welcome/ 
    // Requires using System.Text.Encodings.Web;

    public IActionResult Welcome(string name, int numTimes = 1)
    {
        ViewData["Message"] = "Hello " + name;
        ViewData["NumTimes"] = numTimes;
        return View();
    }
  
}