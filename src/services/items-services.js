import axios from "axios";

export async function fetchMenu() {
  const apiURL = `http://localhost:3000/buscar-produtos`;

  try {
    const response = await axios.post(apiURL, {
      tipoBusca: "Todos",
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar cardápio:", error);
    throw { message: "Erro ao buscar cardápio" };
  }
}
