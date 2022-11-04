import { faker } from "@faker-js/faker";

let total_fetch = 18;

export const users = {
  page: 1,
  per_page: 6,
  total: total_fetch,
  total_pages: 3,
  data: [],
};

function createFakeUser(i) {
    let first_name = faker.name.firstName()
    let last_name= faker.name.lastName()
  return {
    id: i,
    first_name: first_name,
    last_name: last_name,
    email: faker.internet.email(first_name, last_name, "gmail.com"),
    avatar: faker.image.avatar(),
  };
}

for (let i = 1; i<= total_fetch; i++) {
  users.data.push(createFakeUser(i));
}
