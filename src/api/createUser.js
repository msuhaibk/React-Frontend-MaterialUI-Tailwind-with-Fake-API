export const createUser = (fetched, first_name, last_name, email, avatar) =>
  new Promise((resolve, reject) => {
    let users = fetched.data;
    let lastIndex = users.length - 1;
    let id = users[lastIndex] ? users[lastIndex].id + 1 : 1;
    if (users) {
      var newUser = {
        id: id,
        first_name: first_name,
        last_name: last_name,
        email: email,
        avatar: avatar
      }
      users = [...users,newUser];
      fetched.data = users;
      fetched.total = fetched.total + 1;
      fetched.total_pages = Math.ceil(fetched.total/fetched.per_page);
      setTimeout(() => resolve(fetched), 800);
    }
  });

createUser()
  .then((result) => {
    return result;
  })
  .catch((error) => {
    return error;
  });
