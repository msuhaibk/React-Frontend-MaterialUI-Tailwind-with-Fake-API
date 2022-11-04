import { users } from "../data/Fake-Api";

 export const getUsers = () =>
  new Promise((resolve, reject) => {
    if (!users) {
        return setTimeout(
            () => reject(new Error('Users Not Found')),
            800
          );
    }

    setTimeout(() => resolve(users), 800);
  });

getUsers()
  .then((result) => {
    return result;
  })
  .catch((error) => {
    return error;
  });

