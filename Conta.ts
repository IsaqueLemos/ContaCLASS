export class Conta {
  private banco: string;
  private agencia: string;
  private titular: string;
  private saldo: number;

  constructor(
    banco: string,
    agencia: string,
    titular: string,
    saldo: number = 0
  ) {
    this.banco = banco;
    this.agencia = agencia;
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(valor: number): object {
    if (valor < 0 || typeof valor !== "number") {
      throw 'Error: Valor informado para o depósito não é válido")';
    }

    this.saldo += valor;
    return {
      Mensagem: "Valor depositado com sucesso",
      Saldo: `R$ ${this.saldo.toFixed(2).replace(".", ",")}`,
    };
  }

  sacar(valor: number): object {
    if (valor < 0 || typeof valor !== "number") {
      throw "Error: Valor informado para o saque não é válido";
    }

    if (this.saldo < valor) {
      return {
        Mensagem: "Saque Indisponível. Valor do saque maior que o da conta!",
        Valor_Saque: `Tentativa de saque: R$ ${valor
          .toFixed(2)
          .replace(".", ",")}`,
        Saldo: `R$ ${this.saldo.toFixed(2).replace(".", ",")}`,
      };
    } else {
      this.saldo -= valor;
      return {
        Mensagem: "Saque realizado com sucesso",
        Saldo: `R$ ${this.saldo.toFixed(2).replace(".", ",")}`,
      };
    }
  }

  transferir(valor: number, conta: Conta): object {
    if (valor < 0 || typeof valor !== "number") {
      throw 'Error: Valor informado para a transferência não é válido")';
    }

    if (this.saldo < valor) {
      return {
        Mensagem:
          "Transferência Indisponível. Valor da transferência maior que o da conta!",
        Valor_Transferencia: `Tentativa de transferência: R$ ${valor
          .toFixed(2)
          .replace(".", ",")}`,
        Saldo: `R$ ${this.saldo.toFixed(2).replace(".", ",")}`,
      };
    } else {
      this.saldo -= valor;
      conta.saldo += valor;
      return {
        Mensagem: "Transferência Realizada.",
        Receptor: conta.titular,
        Valor_Transferido: `R$ ${valor.toFixed(2).replace(".", ",")}`,
        Saldo_Remetente: `R$ ${this.saldo.toFixed(2).replace(".", ",")}`,
      };
    }
  }

  getInfoConta(): object {
    return {
      Titular: this.titular,
      Agencia: this.agencia,
      Banco: this.banco,
    };
  }

  getSaldo(): object {
    return {
      Saldo: `R$ ${this.saldo.toFixed(2).replace(".", ",")}`,
    };
  }
}
