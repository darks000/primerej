using Newtonsoft.Json;

namespace proyecto.Models
{
public class abono
{
[JsonProperty("id")]
public int Id { get; set; }

[JsonProperty("conductor")]
public string conductor { get; set; }

[JsonProperty("fecha")]
public string fecha { get; set; }

[JsonProperty("valor")]
public int valor { get; set; }
}
}