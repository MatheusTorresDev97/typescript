//TIPOS PRIMITIVOS
let valor: number = 3000;
let nome: string = "";
let isPago: boolean = false;

let qualquer: any = "";
qualquer = 25;

//ARRAYS

const lista: number[] = [];
lista.push(13, 22.5, 22, 89, 1.58);

//Tipos Personalizados (Type Alias)
type NovaTransacao = {
  tipoTransacao: NovaTipoTransacao;
  data: Date;
  valor: number;
};

//Enum
enum NovaTipoTransacao {
  DEPOSITO = "Depósito",
  TRANSFERENCIA = "Transferência",
  PAGAMENTO_BOLETO = "Pagamento de Boleto",
}

const novaTransacao: NovaTransacao = {
  tipoTransacao: NovaTipoTransacao.DEPOSITO,
  data: new Date(),
  valor: 0,
};
