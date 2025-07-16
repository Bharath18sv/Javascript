function select(keys, obj) {
  const result = {};
  for (let key of keys) {
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}

const keys = ["name", "age"];
const person = {
  name: "Bharath S V",
  age: 21,
  city: "Bengaluru",
};

const filteredPerson = select(keys, person);
console.log(filteredPerson);
