using System;   //importando biblioteca System
                //namespace é equivalente ao package do Java
public class Item (string nome, decimal preco)
{
    // Atributos
    public string Nome{ get; private set; } = nome;
    public decimal Preco{ get; protected set; } = preco;

    // Métodos
    public virtual decimal CalcularPreco()
    {
        return Preco;
    }

    //toString()
    public override string ToString()
    {
        return $"Item: {Nome}, Preço: {Preco:C}";
    }
}