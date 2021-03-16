const apiUrl = "http://localhost:3000";

export default function sendRequest(method, route, data = null) {
    const headers = {
      "Content-type": "application/json",
    };
    return fetch(apiUrl+route, {
      method: method,
      body: data ? JSON.stringify(data) : null,
      headers: headers,
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
        
      throw new Error("No data");
    });
  }