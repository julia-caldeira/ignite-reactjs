import { Summary } from '../Summary';
import { TransactionsTable } from '../Transactions Table';
import {Container} from './styles'

export function Dashboard(){
  return(
    <Container>
      <Summary/>
      <TransactionsTable/>
    </Container>
  );
}