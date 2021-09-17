import Modal from 'react-modal';
import closeImg from '../../assets/vector.svg'
import incomeImg from '../../assets/entradas.svg'
import outcomeImg from '../../assets/saidas.svg'
import { Container, TransactionTypeContainer } from './styles';


interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Fechar Modal" />
      </button>

      <Container>
        <h2>Cadastrar Transação</h2>

        <input
          type="text"
          placeholder="Título"
        />

        <input
          type="number"
          placeholder="Valor"
        />

        <TransactionTypeContainer>
          <button
            type="button"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>

          <button
            type="button"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
        />
        <button type="submit">
          cadastrar
        </button>
      </Container>
    </Modal>
  )
}