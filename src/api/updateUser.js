export const updateUser = (id, fetched, first_name, last_name, email, avatar) =>
  new Promise((resolve, reject) => {
    let users = fetched.data;
    if (users) {
      var findex = users.findIndex((e) => (e.id) === id);
      users[findex] = {
        id: id,
        first_name: first_name,
        last_name: last_name,
        email: email,
        avatar: avatar
      };
      fetched.data = users
      if (findex<0) {
        return setTimeout(() => reject(new Error("User Not Found")), 800);
      }
      setTimeout(() => resolve(fetched), 800);
    }
  });

updateUser()
  .then((result) => {
    return result;
  })
  .catch((error) => {
    return error;
  });
