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

const getLength = (value: string | (number | string)[]): number | undefined => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type TItems = {
  title: string;
  rating: number;
};
const filterByRating = (items: TItems[]): TItems[] => {
  items.forEach((item) => {
    if (item.rating < 0 || item.rating > 5) {
      throw new Error(
        `Invalid rating for "${item.title}".Rating must be between 0 and 5.`
      );
    }
  });
  const filterItems = items.filter((item) => item.rating >= 4);
  return filterItems;
};

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

type TArray = (string | number)[];

const getUniqueValues = (array1: TArray, array2: TArray): TArray => {
  const result: TArray = [];
  const checkExists = (arr: TArray, value: string | number): boolean => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        return true;
      }
    }
    return false;
  };

  for (let i = 0; i < array1.length; i++) {
    if (!checkExists(result, array1[i])) {
      result[result.length] = array1[i];
    }
  }

  for (let i = 0; i < array2.length; i++) {
    if (!checkExists(result, array2[i])) {
      result[result.length] = array2[i];
    }
  }

  return result;
};

type TProduct = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: TProduct[]): number => {
  if (products.length === 0) {
    return 0;
  }
  const result = products.reduce((total, item: TProduct) => {
    const { price, quantity, discount } = item;
    const subtotal = price * quantity;
    if (discount !== undefined) {
      const discountAmount = subtotal * (discount / 100);
      total += subtotal - discountAmount;
    } else {
      total += subtotal;
    }
    return total;
  }, 0);
  return result;
};
