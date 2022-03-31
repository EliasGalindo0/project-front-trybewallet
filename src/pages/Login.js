// - Realize as seguintes verificações nos campos de email e senha, de modo que caso sejam falsas o botão fique desabilitado:
//   - O email está no formato válido, como 'alguem@alguem.com'.
//   - A senha possui 6 ou mais caracteres.
// - Salve o email no estado da aplicação, com a chave **_email_**, assim que a pessoa usuária logar.
// - A rota deve ser mudada para '/carteira' após o clique no botão '**Entrar**'.
//   **O que será verificado:**
// - A rota para esta página deve ser "/"
// - Crie um local para que o usuário insira seu email e senha
// - Crie um botão com o texto "Entrar"
// - Realize as seguintes verificações nos campos de email, senha e botão:
// - Se é um e-mail no formato válido;
// - Se a senha tem 6 ou mais caracteres;
// - Desabilitar o botão `Entrar` caso e-mail e/ou senha estiverem no formato inválido
// - Habilitar o botão `Entrar` caso e-mail e senha sejam válidos
// - Salve o email no estado da aplicação, com a chave email, assim que o usuário logar
// - A rota deve ser mudada para "/carteira" após o clique no botão
// ### Página da Carteira
// Crie uma página para gerenciar a carteira de gastos em diversas moedas, e que traga a despesa total em real que é representado pelo código 'BRL'. Esta página deve ser renderizada por um componente chamado **_Wallet_**.

import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <span>Login</span>
        <label htmlFor="email">
          Digite o seu E-mail
          <input
            type="email"
            data-testid="email-input"
            onChange="test"
            name="email"
            placeholder="Email"
          />
        </label>
        <label htmlFor="password">
          Digite sua Senha
          <input
            type="password"
            data-testid="password-input"
            onChange="test"
            name="password"
            placeholder="Senha com 6 dígitos"
          />
        </label>
        <button
          type="submit"
          onClick="test"
          name="button-login"
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
