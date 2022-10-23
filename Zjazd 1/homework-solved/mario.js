let height = 5;
// 1. Repeat n times, where n is height
for (let i = 1; i <= height; i++) {
  // i. count spaces
  let spacesCount = height - i;
  // ii. count #
  let hashCount = i;
  //iii. display spaces and # accoring to count
  let spaces = "";
  for (let j = 0; j < spacesCount; j++) {
    spaces += " ";
  }
  let hashes = "";
  for (let k = 0; k < hashCount; k++) {
    hashes += "#";
  }
  console.log(spaces + hashes + " " + hashes);
}
