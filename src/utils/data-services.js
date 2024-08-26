export async function fetchCepData(cep, numero) {
  const numeroCasa = Number(numero);
  if (isNaN(numeroCasa) || numeroCasa < 1) {
    return { error: "Número inválido" };
  }

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    if (data.erro) {
      return { error: "CEP não encontrado" };
    }
    const endereco = {
      logradouro: data.logradouro,
      bairro: data.bairro,
      localidade: data.localidade,
      uf: data.uf,
      numero,
    };

    return { endereco };
    // return { data: { ...data, numero } };
  } catch (error) {
    // console.error(error);
    return { error: "Erro ao buscar CEP" };
  }
}
