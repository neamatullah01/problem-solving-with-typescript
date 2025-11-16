const formatValue = (
  value: string | number | boolean
): string | number | boolean | undefined => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  }
};

// console.log(formatValue("helloooo"));
// console.log(formatValue(7));
// console.log(formatValue(false));

const getLength = (value: string | (number | string)[]): number | undefined => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
};

// console.log(getLength("typescriptNeamat"));
// console.log(getLength(["abs", "full", 60]));

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// const person1 = new Person("John Doe", 30);
// console.log(person1.getDetails());

// const person2 = new Person("Alice", 25);
// console.log(person2.getDetails());

type TItems = {
  title: string;
  rating: number;
};
const filterByRating = (items: TItems[]): TItems[] => {
  const filterItems = items.filter((item) => item.rating >= 4);
  return filterItems;
};

// const books = [
//   { title: "Book A", rating: 4.5 },
//   { title: "Book B", rating: 3.2 },
//   { title: "Book C", rating: 5.0 },
//   { title: "Book C", rating: 4.8 },
//   { title: "Book C", rating: 2.8 },
// ];
// console.log(books);

// console.log(filterByRating(books));

type TUser = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
const filterActiveUsers = (users: TUser[]): TUser[] => {
  const filteredUser = users.filter((user) => user.isActive === true);
  return filteredUser;
};

// const users = [
//   { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
//   { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
//   { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
// ];

// console.log(filterActiveUsers(users));

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable === true ? "Yes" : "No"}`
  );
};

// const myBook: Book = {
//   title: "The Great Gatsby",
//   author: "F. Scott Fitzgerald",
//   publishedYear: 1925,
//   isAvailable: true,
// };

// printBookDetails(myBook);

type TArray = (string | number)[];

const getUniqueValues = (array1: TArray, array2: TArray): TArray => {
  const uniqueValues = array2.reduce(
    (result: TArray, item) => {
      if (!result.includes(item)) {
        result.push(item);
      }
      return result;
    },
    [...array1]
  );
  return uniqueValues;
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7, 8, 2, 9];
console.log(getUniqueValues(array1, array2));
