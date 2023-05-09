async function fetchData(url, data = {}, config = {}) {  
    const response = await fetch(url, {  
      method:  config.method || 'POST',  
      body: data,
      mode: 'cors',
      cache: 'no-cache',  
      credentials: "same-origin", // include, *same-origin, omit
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer",
      headers: {  
        'Content-Type': config.contentType || 'application/json'  
      }  
    });  
    if (response.ok) {
        try {
            return await response.json();  // 常用类型：json，text，其他：arrayBuffer,blob,formdata
        } catch(e) {
            console.log('Response is not json.');
        }
    } else {  
      console.error('Error fetching data');  
    }  
}