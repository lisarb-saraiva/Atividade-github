import React, { useState } from 'react';

const FeedbackForm = () => {
  // Inicializamos os estados com strings vazias
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  // Função para atualizar o estado do nome
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // Função para atualizar o estado do email
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Função para atualizar o estado do comentário
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  // Função para enviar o formulário
  const handleSubmit = () => {
    // Validação simples para verificar se os campos estão preenchidos
    if (name.trim() === '' || email.trim() === '' || comment.trim() === '') {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    alert(`
      Nome: ${name}
      Email: ${email}
      Comentário: ${comment}
    `);

    // Limpa os campos após o envio
    setName('');
    setEmail('');
    setComment('');
  };

  return (
    <div>
      <h2>Formulário de Feedback</h2>
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="comment">Comentário:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={handleCommentChange}
          ></textarea>
        </div>
        <button type="button" onClick={handleSubmit}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;