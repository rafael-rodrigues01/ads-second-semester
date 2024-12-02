// Instanciando o serviço externo
ExternalPaymentService externalService = new ExternalPaymentService();
ExternalBitCoinService externalBitCoinService = new ExternalBitCoinService();

// Criando o adapter para permitir o uso do serviço externo
IPaymentProcessor paymentProcessor = new ExternalPaymentAdapter(externalService);
IPaymentProcessor paymentProcessor2 = new ExternalBitCoinAdapter(externalBitCoinService);

// Usando o serviço de pagamento com o adapter
PaymentService paymentService = new PaymentService(paymentProcessor);
paymentService.MakePayment(150.00M);