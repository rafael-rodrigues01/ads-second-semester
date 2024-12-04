using System.ComponentModel.DataAnnotations;
using NuGet.Packaging.Signing;

namespace Cafeteria.Models
{
  public class Order
  {
    public int Id { get; set; }
    public DateTime TimesTamp { get; set; }
    public decimal TotalPrice { get; set; }
  }
}