const repositoryName = 'unform2';

export function RepositoryItem(props){
  return(
    <li>
          <strong>{props.repository?.name ?? 'nome default'}</strong>
          <p>{props.repository.description}</p>

          <a href={props.repository.html_url}>Acessar repositório</a>
        </li>
  )
}