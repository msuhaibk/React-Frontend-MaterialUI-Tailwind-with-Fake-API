export const getUser = (id, fetched) =>
  new Promise((resolve, reject) => {
    let users = fetched.data;
    if (users){
        const searched = users.find((e) => e.id === id);
        if (!searched) {
          return setTimeout(() => reject(new Error("User not found")), 800);
        }
        setTimeout(() => resolve(searched), 800);
    }

  });

getUser()
  .then((result) => {
    return result;
  })
  .catch((error) => {
    return error;
  });
