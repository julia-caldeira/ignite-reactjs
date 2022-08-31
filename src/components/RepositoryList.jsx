import { RepositoryItem } from "./RepositoryItem";

const repository={
  name: 'nome belissimo',
  description: 'forms em reactJS',
  link: 'https://webpack.js.org/configuration/devtool/'
}

export function RepositoryList(){
  return(
    <section className="repository-list">
      <h1>
        Lista de repositórios queridos
      </h1>
      <ul>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
      </ul>
    </section>
  );
}