// # 6.Write a function called addFullNameProperty. Given an object that has a firstName
// # property and a lastName property, addFullNameProperty adds a fullName property to the object, its value is a string with the first name and last name separated by a space.

function addFullNameProperty(object) {
  object.fullName = `${object.first_name} ${object.last_name}`;
}
const student = {
  first_name: "John",
  last_name: "Doe",
};

console.log("Student object before change:", student);

addFullNameProperty(student);

console.log("Student after the change: ", student);
