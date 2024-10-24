using System;

public class Pedido(int numeroPedido, string cliente, List<Item> itens, decimal total)
{
    public int NumeroPedido{ get; set; } = numeroPedido;
    public string Cliente{ get; set; } = cliente;
    public List<Item> Itens{ get; set; } = itens;
    public decimal Total{ get; set; } = total;

    public void AdicionarItem(Item item)
    {
        
    }

    public void RemoverItem(Item item)
    {

    }

    public void CalcularTotal()
    {

    }
}