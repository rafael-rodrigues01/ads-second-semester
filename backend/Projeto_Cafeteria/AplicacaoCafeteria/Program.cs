using System;

public class Program
{
    public static void Main(string[] args)
    {
        Item item = new Item("Pão de queijo", 5.90m);
        Console.WriteLine(item);

        Bebida bebida = new Cafe("Expresso", "Capuccino", 4.90m, "Grande");
        Console.WriteLine(bebida);

        Sobremesa sobremesa = new Sobremesa("Bolo", 4, "Nutela");
        Console.WriteLine(sobremesa);
    }
}