public class ExternalBitCoinAdapter : IPaymentProcessor
{
    private readonly ExternalBitCoinService _externalBitCoinService;

    public ExternalBitCoinAdapter(ExternalBitCoinService externalBitCoinService)
    {
        _externalBitCoinService = externalBitCoinService;
    }

    public void ProcessPayment(decimal amount)
    {
        // Chamando o método do serviço externo
        _externalBitCoinService.transferToWallet(amount);
    }
}