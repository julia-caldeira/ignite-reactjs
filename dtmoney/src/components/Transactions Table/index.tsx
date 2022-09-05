import { Container } from "./styles";

export function TransactionsTable (){
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="deposito">+ R$2120,00</td>
            <td>Trabalho</td>
            <td>28/02/2022</td>
          </tr>

          <tr>
            <td>Livro catecismo</td>
            <td className="retirada">- R$35,00</td>
            <td>Estudos</td>
            <td>17/02/2022</td>
          </tr>

        </tbody>
      </table>
    </Container>
  );
}