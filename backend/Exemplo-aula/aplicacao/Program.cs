// RELAÇÂO DE ASSOCIAÇÃO

Console.WriteLine("Relação de associação:");

Paciente p1 = new Paciente("Joao");
Medico m1 = new Medico("Roberto");

m1.AtenderPaciente(p1);
Console.WriteLine(p1.Nome);

//RELAÇÃO DE AGREGRAÇÃO

Console.WriteLine("Relação de agregação:");

Aluno aluno1 = new Aluno("André");
Aluno aluno2 = new Aluno("Amanda");

Universidade universidade = new Universidade();
universidade.AdicionarAluno(aluno1);
universidade.AdicionarAluno(aluno2);


universidade.MostrarAlunos();

//RELAÇÃO DE COMPOSIÇÃO

Console.WriteLine("Relação de composição:");

Casa c1 = new Casa();
c1.AddComodo(new Comodo("Sala"));
c1.AddComodo(new Comodo("Cozinha"));
c1.AddComodo(new Comodo("Quarto"));

c1.MostrarComodos();


