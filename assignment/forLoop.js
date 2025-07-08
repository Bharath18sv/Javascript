let numbers = prompt("Enter your numbers to add(comma seperated)").split(",");
sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += Number(numbers[i]);
}
console.log(sum);
