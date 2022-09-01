import React from "react";

interface RepositoryItemProps{ //fazendo tipagem
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export function RepositoryItem(props: RepositoryItemProps){
  return(
    <li>
          <strong>{props.repository?.name ?? 'nome default'}</strong>
          <p>{props.repository.description ?? '--descrição vazia--'}</p>

          <a href={props.repository.html_url}>Acessar repositório</a>
        </li>
  )
}