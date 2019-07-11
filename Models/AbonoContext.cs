using Microsoft.EntityFrameworkCore;
namespace proyecto.Models
{
public class AbonoContext : DbContext
{
public AbonoContext(DbContextOptions<AbonoContext> options) : 
base(options)
{
}
public DbSet<abono> abono { get; set; }
}
}