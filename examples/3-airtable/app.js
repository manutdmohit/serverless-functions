const result = document.querySelector('.result');

const fetchData = async () => {
  try {
    // const { data } = await axios.get(`/api/3-airtable`);
    const { data } = await axios.get(`/api/3-z-complete`);
    const products = data
      .map((product) => {
        const { id, url, name, price } = product;

        return `<a href="product.html?id=${id}" 
    class="product">
    <img src="${url}" alt="${name}"/>
    <div className="info">
    <h5>${name}</h5>
    <h5>$${price}</h5>
     </div>
    </a>`;
      })
      .join('');

    result.innerHTML = products;
  } catch (error) {
    result.innerHTML = '<h4>There was an error</h4>';
  }
};

fetchData();
