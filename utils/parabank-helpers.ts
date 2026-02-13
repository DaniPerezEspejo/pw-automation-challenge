import { faker } from "@faker-js/faker";

/**
 * Generates a random user using faker library to randomize the creation
 * @returns A user data (Any type). A user data interfaze could be created,
 *          but left as it is for simplicity
 */
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

/**
 * Returns a password to be used
 * @param password Password value
 * @returns Password to be used or .env variable value if password matches .env variable
 */
export const getPassword = (password: string): string => {
  const envPassword = process.env[password];
  return envPassword ? envPassword : password;
};

/**
 * Returns today date in a specific format
 * @returns Today date string in format MM-DD-YYYY
 */
export const getTodayDateFormatted = () => {
  const today = new Date().toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  return today.replace(/\//g, "-");
};
