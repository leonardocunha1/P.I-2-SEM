import axios from "axios";

export async function createUser(nome, email, senha, telefone) {
  const apiURLVerificarEmail = `http://localhost:3000/verificar-email`;

  // Verificar se o e-mail já está em uso
  try {
    const response = await axios.post(
      apiURLVerificarEmail,
      {
        email,
      },
      {
        withCredentials: true, // Adicione isso para enviar cookies
      },
    );
    const { exists } = response.data;
    console.log(exists);

    // Verifica se o e-mail existe no banco de dados

    // Se o e-mail já existe, lança uma exceção com a mensagem de erro personalizada
    if (exists) {
      throw { erroEmail: "Este e-mail já está em uso!!" };
    }
  } catch (error) {
    console.error("Erro ao verificar e-mail:", error);
    throw { message: error.erroEmail || "Erro ao verificar e-mail" };
  }

  const apiURL = `http://localhost:3000/cadastrar-usuario`;

  // Cadastrar o usuário
  try {
    const response = await axios.post(
      apiURL,
      {
        nome,
        email,
        telefone,
        senha_cadastro: senha,
      },
      {
        withCredentials: true, // Adicione isso para enviar cookies
      },
    );

    return response.data; // Retorna os dados do usuário, se necessário
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    throw {
      message: error.response?.data?.error || "Erro ao cadastrar usuário",
    };
  }
}

export async function login(email, senha) {
  const apiURL = `http://localhost:3000/verificar-login`;

  // Verificar se o e-mail e a senha estão corretos
  try {
    const response = await axios.post(
      apiURL,
      {
        email,
        senha,
      },
      {
        withCredentials: true, // Adicione isso para enviar cookies
      },
    );

    // Se o e-mail e a senha não estiverem corretos:
    if (response.data.validacao !== true) {
      // Se o usuário tentou fazer login muitas vezes, lança uma exceção com a mensagem de erro
      if (response.data.tentativas) {
        throw {
          erroLogin: `Tentativas bloqueadas! Tente novamente em  ${response.data.tempo} minutos!`,
        };
      }

      // Se o e-mail e a senha não estiverem corretos, lança uma exceção com a mensagem de erro
      throw {
        erroLogin: "E-mail ou senha inválidos",
      };
    }

    return { message: "Login bem-sucedido" };
  } catch (error) {
    console.error("Login error:", error);
    throw {
      message: error.erroLogin || "Erro ao fazer login",
    };
  }
}

// Função para buscar os dados do usuário após o login
export async function buscarDadosUsuario() {
  const apiURL = `http://localhost:3000/buscar-dados-cliente`;

  try {
    const response = await axios.post(apiURL, {}, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados do usuário:", error);
    throw { message: "Erro ao buscar dados do usuário" };
  }
}
