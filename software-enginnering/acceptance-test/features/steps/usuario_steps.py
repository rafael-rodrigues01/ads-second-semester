from behave import given, when, then
from assertpy import assert_that

class Sistema:
    def __init__(self):
        self.usuarios = {}
        self.tentativas_erradas = {}
        self.limite_tentativas = 0

    def criar_usuario(self, login, nome, senha):
        self.usuarios[login] = {"nome": nome, "senha": senha, "tentativas": 0, "bloqueado": False}

    def entrar_no_sistema(self, context, login, senha):
        if login not in self.usuarios:
            return "Usuário não encontrado!"

        usuario = self.usuarios[login]
        
        if usuario["bloqueado"]:
            return "Conta bloqueada!"
        
        if senha != usuario["senha"]:
            usuario["tentativas"] += 1

            if usuario["tentativas"] >= context.limite_tentativas:
                usuario["bloqueado"] = True
                return "Conta bloqueada!"
            return "Senha incorreta!"
        
        usuario["tentativas"] = 0
        return "Login bem-sucedido!"

sistema = Sistema()

@given('que eu crio um usuário com login "{login}", nome "{nome}" e senha "{senha}"')
def step_criar_usuario(context, login, nome, senha):
    sistema.criar_usuario(login, nome, senha)

@given('que o limite de tentativas de senha errada é {limite:d}')
def step_limite_tentativas(context, limite):
    context.limite_tentativas = limite

@when('eu tento entrar no sistema com login "{login}" e senha "{senha}"')
def step_entrar_no_sistema(context, login, senha):
    context.mensagem = sistema.entrar_no_sistema(context, login, senha)

@then('eu recebo a mensagem de erro "{mensagem}"')
def step_verificar_mensagem(context, mensagem):
    assert_that(context.mensagem).is_equal_to(mensagem)
