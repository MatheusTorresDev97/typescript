let saldo: number = 3000;

const elementoSaldo = document.querySelector(
  ".saldo-valor .valor"
) as HTMLElement;
const elementoDataAcesso = document.querySelector(
  ".block-saldo time"
) as HTMLElement;
if (elementoSaldo) {
  elementoSaldo.textContent = formatarMoeda(saldo);
}

if (elementoDataAcesso) {
  const dataAcesso: Date = new Date();
  elementoDataAcesso.textContent = formatarData(dataAcesso);
}
