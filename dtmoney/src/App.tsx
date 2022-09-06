import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

import Modal from 'react-modal'
import { useState } from "react";

Modal.setAppElement('#root'); //para acessibilidade

export function App() {
//codigo para modal funcionar bonitin
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false); //o modal vem fechado por padrão 

function handleOpenNewTransactionModal(){
  setIsNewTransactionModalOpen(true);
}

function handleCloseNewTransactionModal(){
  setIsNewTransactionModalOpen(false);
}


  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <h1>Hello my friends</h1>

      <Modal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}>
        <h2>Cadastrar transação</h2>

      </Modal>

      <GlobalStyle/>
    </>
  );
}