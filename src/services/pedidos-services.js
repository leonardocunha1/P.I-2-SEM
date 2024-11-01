import axios from "axios";

export async function finalizarCompra(order) {
  const apiURL = "http://localhost:3000/cadastrar-pedido";

  try {
    const response = await axios.post(apiURL, {
      order,
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao finalizar compra:", error);
    throw {
      message: error.response?.data?.error || "Erro ao finalizar compra",
    };
  }
}
