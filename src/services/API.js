const URL = 'https://economia.awesomeapi.com.br/json/all';

const fetchCurrency = async () => {
  const response = fetch(URL);
  const data = (await response).json();
  return data;
};

export default fetchCurrency;
