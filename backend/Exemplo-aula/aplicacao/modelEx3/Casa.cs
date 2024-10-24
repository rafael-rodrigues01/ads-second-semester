using System.Runtime.CompilerServices;

class Casa {
  public List<Comodo> comodos = new List<Comodo>();

  public void AddComodo(Comodo comodo) {
    comodos.Add(comodo);
  }

  public void MostrarComodos(){
    if(comodos.Count != 0) {
      foreach (var comodo in comodos) {
        Console.WriteLine(comodo.Nome);
      }
    } else {
      Console.WriteLine("Não há comodos");
    }
    
  }
}