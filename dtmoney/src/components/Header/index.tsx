import { useState } from 'react'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'
import Modal from 'react-modal'

interface HeaderProps{ //tipagem da props
  onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps){ //dou tipo para as props
  return(
    <Container>
      <Content>
        <img src={logoImg} alt='dtmoneylogo'/>
        <button type='button' onClick={onOpenNewTransactionModal}>Nova transação</button>
      </Content>
    </Container>
  )
}