const result = document.querySelector('.result');

const fetchData = async () => {
  try {
    // const { data } = await axios('/.netlify/functions/1-hello');
    const { data } = await axios('/api/1-hello');
    result.textContent = data;
  } catch (error) {
    console.log(error.response.data);
    result.textContent = error.response.data;
  }
};

fetchData();
