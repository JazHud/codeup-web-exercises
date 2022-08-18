let givenOddNum;

while (true) {
    givenOddNum = prompt("Type in a valid number")
    if (givenOddNum < 50 && givenOddNum % 2 !== 0) {
        break;
    }
}

for (let i = 1; i < 50; i += 2) {
    if (givenOddNum == i) {
        console.log("Yikes! Skipping number: " + i);
        continue;
    }
    console.log("Here is an odd number " + i);

}