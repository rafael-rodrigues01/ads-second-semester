using System;

public abstract class Bebida : Item
{
    public string Tamanho{ get; set; }

    public Bebida(string nome, decimal preco, string tamanho):base(nome,preco)
    {
        Tamanho = tamanho;
    }

    public override abstract decimal CalcularPreco();
    public abstract override string ToString();
}