async function post (url, params) {
  const result = await axios.post(url,{params});
  return result;
};

async function get (url, params) {
  const result = await axios.get(url,{params});
  return result;
};