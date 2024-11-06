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

export async function logout() {
  const apiURL = `http://localhost:3000/sair-conta`;

  try {
    const response = await axios.post(
      apiURL,
      {},
      {
        withCredentials: true,
      },
    );

    return response.data;
  } catch (error) {
    console.error("Erro ao fazer logout:", error);
    throw {
      message: error.response?.data?.error || "Erro ao fazer logout",
    };
  }
}

export async function updateUser(userData) {
  const apiURL = `http://localhost:3000/alterar-dados-usuario`;

  try {
    // Enviar a solicitação para atualizar os dados do usuário
    const response = await axios.post(
      apiURL,
      {
        nome: userData.nome,
        email: userData.email,
        telefone: userData.telefone,
        senha_atual: userData.senha_atual,
        senha_nova: userData.senha_nova,
      },
      {
        withCredentials: true, // Inclui cookies para autenticação
      },
    );

    return response.data; // Retorna os dados atualizados, se necessário
  } catch (error) {
    console.error("Erro ao atualizar os dados do usuário:", error);
    console.log("AAAAAAAAAAAAAAAAAAAAAAAA");

    // Lança uma exceção com uma mensagem de erro adequada
    throw {
      message:
        error.response?.data?.message || "Erro ao atualizar dados do usuário",
    };
  }
}

export async function deleteUser(senha_atual) {
  const apiURL = `http://localhost:3000/excluir-conta`;

  try {
    // Enviar a solicitação para excluir o usuário
    const response = await axios.post(
      apiURL,
      {
        senha_atual,
      },
      {
        withCredentials: true, // Inclui cookies para autenticação
      },
    );

    return response.data; // Retorna a resposta da exclusão, se necessário
  } catch (error) {
    console.error("Erro ao excluir o usuário:", error);

    // Lança uma exceção com uma mensagem de erro adequada
    throw {
      message: error.response?.data?.message || "Erro ao excluir o usuário",
    };
  }
}

export async function fetchPedidosCliente() {
  const apiURL = `http://localhost:3000/buscar-pedidos-clientes`;
  try {
    const response = await axios.post(
      apiURL,
      {},
      {
        withCredentials: true, // Enviar cookies
      },
    );

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar pedidos do cliente:", error);
    throw {
      message:
        error.response?.data?.error || "Erro ao buscar pedidos do cliente",
    };
  }
}
