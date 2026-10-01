class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

function isLetter(char) {
  return  /^[a-zA-Z0-9]+$/.test(char);
}
   let withoutExtraChar=''
   for(let j=0 ; j<s.length ; j++){
     if(isLetter(s[j])){
        withoutExtraChar+=s[j]
     }
     else{
       continue
     }
   }
   
  // s= s.toLowerCase().split(' ').join('');
   console.log(withoutExtraChar)
   let reverseStr ='';
   for(let i=s.length-1 ; i>=0 ; i--){
 if(isLetter(s[i])){
   reverseStr+=s[i]
 }
     else{
       continue
     }
   }
   console.log(reverseStr)
   if(withoutExtraChar.toLowerCase()===reverseStr.toLowerCase()){
     return true
   }
   else{
     return false
   }
 
    }
}