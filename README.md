# 💼 TypeScript Interview Questions (With Answers)

---

## 1️⃣ What is the use of the keyof keyword in TypeScript? Provide an example.

**Answer:**  
কোনো object type এর সবগুলো key এর একটি union type বের করার জন্য 'keyof' ব্যবহার করা হয়।

Example:

```ts
type Person = {
  name: string;
  age: number;
};
type Keys = keyof Person; // "name" | "age"
```

---

## 2️⃣ Provide an example of using union and intersection types in TypeScript.

**Answer:**

Union Type Example:
Union type দিয়ে একটি ভেরিয়েবলে একাধিক টাইপ রাখা যাই।

```ts
function printId(id: number | string) {
  console.log("Your ID is:", id);
}

printId(101);
printId("A-55");
```

➡️ এখানে id হতে পারে number অথবা string – দুটোই valid।

Intersection Type Example:
Intersection দিয়ে দুই বা বেশি টাইপ একত্রে করে একটি টাইপ তৈরি করা।

```ts
type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type EmployeeDetails = Person & Employee;

const emp: EmployeeDetails = {
  name: "Neamat",
  employeeId: 123,
};
```

➡️ EmployeeDetails টাইপে Person + Employee দুইটাই থাকতে হবে।
