import React, { useState, useEffect } from 'react';

function Contador() {
  // Definir el estado para el contador
  const [contador, setContador] = useState(0);

  // useEffect se ejecutará cada vez que el contador cambie
  useEffect(() => {
    console.log(`El contador ha cambiado a: ${contador}`);
  }, [contador]); // Dependencia en el contador

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>
    </div>
  );
}

export default Contador;

