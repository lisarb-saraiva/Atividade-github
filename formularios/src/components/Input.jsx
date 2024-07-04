import React, { useRef } from 'react';

const Input = () => {
const nome = useRef("");
console.log("Re-renderizou");
return (
    <>
    <input
        type="text"
        placeholder="Digite seu nome"
        ref={nome}
        />
        <button onClick={() => console.log(nome.current.valueOf, nome.current.type)}>Mostrar</button>
        <h1>{nome.current}</h1>
        </>
);
}

export default Input;