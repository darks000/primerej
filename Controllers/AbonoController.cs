using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using proyecto.Models;

namespace   AbonoController.Controllers
{
[Route("api/[controller]")]
[ApiController]
public class AbonoController : ControllerBase
{
private readonly AbonoContext _context;
public AbonoController(AbonoContext context)
{
_context = context;
if (_context.abono.Count() == 0)
{
// Crea un nuevo item si la coleccion esta vacia,
// lo que significa que no puedes borrar todos los Items.
_context.abono.Add(new abono { Id = 1, conductor = " Dario", fecha = "3/4/2019", valor = 231});
_context.abono.Add(new abono { Id = 2, conductor = "CARLOSto", fecha = "4/4/2109", valor = 42423 });
_context.SaveChanges();
}
}
// Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT
// GET: api/Task
[HttpGet]
public async Task<ActionResult<IEnumerable<abono>>> GETabono()
{
return await _context.abono.ToListAsync();
}

// POST: api/Task
[HttpPost]
public async Task<ActionResult<abono>> PostTaskItem(abono item)
{
_context.abono.Add(item);
await _context.SaveChangesAsync();
return CreatedAtAction(nameof(GETabono), new { id = item.Id }, item);
}


}
}