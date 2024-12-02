# esse arquivo não faz o sistema funcionar de verdade, mas descreve como ele deve se comportar.

Feature: Gerenciamento de Usuários
  Como administrador, quero criar usuários e verificar o comportamento do sistema quando senhas erradas são usadas.

  Scenario: Conta bloqueada após tentativas erradas de login
    Given que eu crio um usuário com login "rafael.rodrigues", nome "rafael rodrigues" e senha "123456"
    And que o limite de tentativas de senha errada é 2
    When eu tento entrar no sistema com login "rafael.rodrigues" e senha "654321"
    Then eu recebo a mensagem de erro "Conta bloqueada!"
