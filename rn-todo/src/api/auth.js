const USER_EMAIL = 'my@email.com';
const USER_PASSWORD = '1234';

export const singIn = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === USER_EMAIL && password === USER_PASSWORD) {
        resolve(email);
      } else {
        reject('not valid email or password');
      }
    }, 1000);
  });
};
