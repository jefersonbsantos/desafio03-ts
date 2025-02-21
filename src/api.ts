const conta = {
  email: "nath@dio.bank",
  password: "123456",
  name: "Nathaly Souza",
  balance: 2000.0,
  id: "1",
};

export const api = {
  post: (url: string, data: any) => new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === '/login') {
        if (data.email === conta.email && data.password === conta.password) {
          resolve(conta);
        } else {
          resolve({ error: "Invalid credentials" });
        }
      } else {
        reject(new Error('Unknown endpoint'));
      }
    }, 1000);
  })
};
