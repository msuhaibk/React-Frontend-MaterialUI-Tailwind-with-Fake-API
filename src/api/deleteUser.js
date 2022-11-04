export const deleteUser = (ids, fetched) =>
  new Promise((resolve, reject) => {
    let users = fetched.data;
    if (users) {
      ids.forEach(id=>{
        let found = users.find((elem) => elem.id === id);
        if (found) {
          let index = users.indexOf(found)
          users.splice(index,1)
        }
      })
      fetched.data = users
      fetched.total = users.length
      fetched.total_pages = Math.ceil(users.length/fetched.per_page)
      setTimeout(() => resolve(fetched), 800);
    } else {
      return setTimeout(
        () => reject(new Error("There seems to be an internal server issue.")),
        1000
      );
    }
  });

deleteUser()
  .then((result) => {
    return result;
  })
  .catch((error) => {
    return error;
  });
