import { AfiliadoAccount } from "./class/AfiliadoAccount"
import { PeopleAccount } from "./class/PeopleAccount"
import { PessoaJuridica } from "./class/PessoaJuridica"



const peopleAccount:PeopleAccount = new PeopleAccount ('gabriel Games',1,10)
const pessoaJuridica:PessoaJuridica = new PessoaJuridica ('PJ',10,1000)
const afiliadoAccount:AfiliadoAccount = new AfiliadoAccount('Gabriel Afiliado',4) 

console.log(pessoaJuridica)
pessoaJuridica.emprestimo(1000000)
console.log(pessoaJuridica)

console.log(afiliadoAccount)
afiliadoAccount.deposito(100)
console.log(afiliadoAccount)