using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace CafeteriaAPI.Data
{
    public class CafeteriaContext : DbContext
    {
        public CafeteriaContext (DbContextOptions<CafeteriaContext> options)
            : base(options)
        {
        }

        public DbSet<Product> Product { get; set; } = default!;
    }
}
