import { Container } from "./styles";
import incomeImg from "../../assets/entradas.svg"
import outcomeImg from "../../assets/saidas.svg"
import totalImg from "../../assets/total.svg"
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary() {
  const transactions = useContext(TransactionsContext);

  console.log(transactions);

  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas " />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saidas " />
        </header>
        <strong>- R$64,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total " />
        </header>
        <strong>R$936,00</strong>
      </div>
    </Container>
  )
}