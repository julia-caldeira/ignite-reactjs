import {useState} from 'react';

//imutabilidade - nao se pode alterar diretamente o valor dela, mas se pode copiar e add novo valor, apontando agora pra novo espaço na memoria

export function Counter(){

  const [counter, setCounter] = useState(0);

  function increment(){
    setCounter(counter+1);
  }
  function decrement(){
    setCounter(counter-1);
  }

  return(
    <div>
      <h2>{counter}</h2>
      <button type="button"  
      onClick={increment}>Increment
      </button>
      <button type="button" 
      onClick={decrement}>Decrement
      </button>
    </div>
  );
}