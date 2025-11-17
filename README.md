# 💼 TypeScript Interview Questions (With Answers)

---

## 1️⃣ What is the use of the keyof keyword in TypeScript? Provide an example.

**Answer:**  
কোনো object type-এর সবগুলো key-এর একটি union type বের করার জন্য keyof ব্যবহার করা হয়।

Example:

```ts
type Person = {
  name: string;
  age: number;
};
type Keys = keyof Person; // "name" | "age"
```

---
