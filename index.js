function isPalindrome(word) {
  // Write your algorithm here
}

/* 
  Add your pseudocode here
*/

function isPalindrome(string){
  for(let i = 0; i < string.length / 2; i++){
    const j = string.length -1 -i
    const first = string[i]
    const last = string[j]
    if(first !== last) return false
  }
  return true
}

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
