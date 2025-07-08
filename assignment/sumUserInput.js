let sum = 0;
allow = true;
while (allow) {
  num = Number(prompt("Enter a number to add(enter 0 to stop)"));
  if (num === 0) {
    allow = false;
  } else {
    sum += num;
  }
}
console.log(`The total sum is : ${sum}`);
