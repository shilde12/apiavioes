export const Service = () => {
  const fetchApi = async () => {
    try {
      const response = await fetch(`/apiavioes.json`);
      const data = await response.json();
      console.log(data);
      return data.avioes; // Ajustar para retornar a lista correta de aviões
    } catch (error) {
      console.log(error);
    }
  };
  return { fetchApi };
};