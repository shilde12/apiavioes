export const Service = () => {
  const fetchApi = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/shilde12/repos`
      );

      const data = await response.json();

      console.log(data);

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return { fetchApi };
};
