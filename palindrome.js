// Program to check whether a string is palindrome or not.

let string = "ababab";
let isPalindrome = true;

// Ieterate loop from 0 to length of the string
for(let i = 0; i < =string.length; i++){
  if(string[i] == string[string.length-i-1]){
    isPalindrome = true;
  }
}
if(isPalindrome){
  console.log(string,"is palindrome");
}else{
  console.log(string,"is not palindrome");
}