import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import React from "react";

interface Repository{ //Tipagem do repositorio, o pai tem q mandar td q o filho vai precisar
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList(){
  const [repositories, setRepositories] = useState<Repository[]>([]); //[] dentro do () pq armazenará uma LISTA de repositorios
  //do tipo LISTA DE REPOSITORY: <Repository[]>

  //dois paramentros: 1. {funçao}, 2. quando(dependencias)? "sempre q repositories mudar" - CUIDADO pra nao deixar sem escrever nada no 2º parametro pq entra em loop
  useEffect(()=>{
    fetch('https://api.github.com/orgs/rocketseat/repos').then(response => response.json()).then(data => setRepositories(data))
  }, [])

  return(
    <section className="repository-list">
      <h1>
        Lista de repositórios queridos
      </h1>
      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository}/>
        })}     
      </ul>
    </section>
  );
}