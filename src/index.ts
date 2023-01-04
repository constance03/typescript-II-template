/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (Person) com as propriedades id, name, email, password e role;
2. Type Aliases de conta, com as propriedades account e permission: 
  a. AdminAccount 
  b. NormalAccount
*/

//Type Alias para uma pessoa (Person) com as propriedades id, name, email, password e role
type TPerson = {
  id: string,
  name: string,
  email: string,
  password: string,
  role: "ADMIN" | "NORMAL"
}

const cliente: TPerson = {
  id: "1b2b3b",
  name: "Tião",
  email: "tiao@gmail.com",
  password: "123",
  role: "NORMAL"
}

console.log(`Nome: ${cliente.name} \nEmail: ${cliente.email}`);

//Type Aliases de conta, com as propriedades account e permission: 
// AdminAccount 
// NormalAccount
type TAdminAccount = {
  account: string
  permission: boolean
}

type TNormalAccount = {
  account: string
  permission: boolean
}

/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:

1. Enum com valores ADMIN e NORMAL;
2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;
4. Crie duas pessoas, uma com permissão normal e a outra admin;
5. Guarde essas pessoas no array de usuários.

*/ 

//Enum com valores ADMIN e NORMAL
enum Role {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

const novoCliente: TPerson = {
  id: "1b3b4b5b6b",
  name: "Claudia",
  email: "claudinha@gmail.com",
  password: "claudinha123",
  role: Role.ADMIN
}

console.table(novoCliente)

//Tipo Intersection unindo: pessoa(Person) + permissão (Role);
type TNormalUser = TPerson & TNormalAccount
type TAdminUser = TPerson & TAdminAccount

//Um array de usuários que permite guardar apenas usuários do tipo Person + Role;
type TUnionTypeToArray = TNormalUser | TAdminUser
const normalAccountArray: TUnionTypeToArray[] = []

// Crie duas pessoas, uma com permissão normal e a outra admin;
// Guarde essas pessoas no array de usuários.

const userNormal: TNormalUser = {
  id: "1298465",
  name: "Cesar",
  email: "cesar@gmail.com",
  password: "cesar04051998",
  account: "cesarBackend", 
  role: Role.NORMAL,
  permission: false
}

const userAdmin: TAdminUser = {
  id: "777658",
  name: "Maria",
  email: "maria@gmail.com",
  password: "senha12345",
  account: "mconstance", 
  role: Role.ADMIN,
  permission: true
}

normalAccountArray.push(userNormal)
normalAccountArray.push(userAdmin)
console.table(normalAccountArray)