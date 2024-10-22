using System;

public class Sobremesa : Item
{
    public string Sabor{ get; private set; }

    public Sobremesa(string nome, decimal preco, string sabor):base(nome,preco)
    {
        Sabor = sabor;
        Preco = CalcularPreco();
    }

    public override decimal CalcularPreco()
    {
        Preco = Sabor == "Nutela" ? Preco * 3 : Preco;
        return Preco;
    }
    public override string ToString()
    {
        return $"Nome: {Nome}, Preço: {Preco:C}, Sabor: {Sabor}";
    }
}