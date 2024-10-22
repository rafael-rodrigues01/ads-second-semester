using System;

public class Cafe : Bebida
{
    public string Tipo{ get; private set; }

    public Cafe(string tipo, string nome, decimal preco, string tamanho) : base(nome, preco, tamanho)
    {
        Tipo = tipo;
        Preco = CalcularPreco();
    }

    public override decimal CalcularPreco()
    {
        Preco = Tamanho == "Grande" ? Preco * 2 : Preco;
        return Preco;
    }
    
    //ToString
    public override string ToString()
    {
        return $"Nome: {Nome}, Preço: {Preco:C}, Tamanho: {Tamanho}, Tipo: {Tipo}";
    }
}