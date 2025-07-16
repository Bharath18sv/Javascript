let object = {
  name: "Bharath S V",
  marks: [67, 56, 89, 56],
  age: 21,
};

for (const key in object) {
  if (Array.isArray(object[key])) {
    delete object[key];
  }
}

console.log(object);
