import { Conta } from "./Conta";

const mostrarDadosConta = (conta: Conta): void => {
  console.table({ ...conta.getInfoConta(), ...conta.getSaldo() });
};

/*
 * DECLARANDO VARIAVEIS
 */
let contaInter: Conta, contaNubank: Conta;

/*
 * CRIANDO CONTAS
 */
console.clear();
console.log("CRIANDO CONTA INTER ...");
setTimeout(() => {
  console.clear();
  contaInter = new Conta("Inter", "001", "José");
  console.log("CONTA INTER CRIADA ______ >");
  mostrarDadosConta(contaInter);
}, 2000);
setTimeout(() => {
  console.clear();
  console.log("CRIANDO CONTA NUBANK ...");
}, 6000);
setTimeout(() => {
  console.clear();
  contaNubank = new Conta("Nubank", "045", "Carlos", 1000);
  console.log("CONTA NUBANK CRIADA ______ >");
  mostrarDadosConta(contaNubank);
}, 9000);

/*
 * REALIZANDO TRANSAÇÕES
 */
setTimeout(() => {
  console.clear();
  console.log(`REALIZANDO DEPÓSITO (R$ 200,00) CONTA INTER ...`);
}, 13000);
setTimeout(() => {
  console.clear();
  contaInter.depositar(200);
  console.log("VALOR DEPOSITADO ______ >");
  mostrarDadosConta(contaInter);
}, 16000);
setTimeout(() => {
  console.clear();
  console.log(`REALIZANDO SAQUE (R$ 750,00) CONTA NUBANK ...`);
}, 20000);
setTimeout(() => {
  console.clear();
  contaNubank.sacar(750);
  console.log("VALOR SACADO ______ >");
  mostrarDadosConta(contaNubank);
}, 23000);
setTimeout(() => {
  console.clear();
  console.log(`
  REALIZANDO TRANSFERÊNCIA
  NUBANK -> 150 -> INTER ...
  `);
}, 27000);
setTimeout(() => {
  console.clear();
  let result = contaNubank.transferir(150, contaInter);
  console.log("INFORMAÇÃO DA TRANSAÇÃO ______ >");
  console.table(result);
}, 30000);
setTimeout(() => {
  console.clear();
  console.log("TRAZENDO INFORMAÇÕES ...");
}, 34000);
setTimeout(() => {
  console.clear();
  console.log("CONTA INTER ::::");
  mostrarDadosConta(contaInter);
  console.log("\nCONTA NUBANK ::::");
  mostrarDadosConta(contaNubank);
  console.log("OPERAÇÃO FINALIZADA");
}, 37000);
