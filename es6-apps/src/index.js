import { firstName, lastName, age, status, address,sayGreet, skills } from './mylib'

import BankService from './services/bank.service'

console.log(firstName, lastName, age, status, address,sayGreet(),skills);

let bService = new BankService();
console.log(bService.getBalance())
