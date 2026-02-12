import { faker } from '@faker-js/faker';

export const generateUserData = () => {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    address: faker.location.city(),
    city: faker.location.city(),
    state: faker.location.state(),
    zipCode: faker.location.zipCode(),
    phoneNumber: faker.phone.number(),
    ssn: faker.string.numeric(9),
    username: faker.internet.username(),
  };
};

export const getPassword = (password: string): string => {
  const envPassword = process.env[password];  
  return envPassword ? envPassword : password;
};
