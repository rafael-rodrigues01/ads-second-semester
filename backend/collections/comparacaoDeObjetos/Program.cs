List<Account> accounts = new List<Account>();

Account a1 = new("Caina Antunes", 1001);
Account a2 = new("Andre Cassulino", 1002);
Account a3 = new("Gabriel Claro", 1003);
Account a4 = new("Glauco Todesco", 1004);

accounts.Add(a1);
accounts.Add(a2);
accounts.Add(a3);
accounts.Add(a4);

accounts.Sort();

foreach(Account account in accounts)
  Console.WriteLine(account);
