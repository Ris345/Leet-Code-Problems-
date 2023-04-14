var isPalindrome = function(s) {
  //  filter all tHE ALPHA NUMERCI CHARS
  //    split.reverse the string 1
  //   for the second Str keep the orginal string and only remove the alphanumeric 
    const cleanStr1 = s.toLowerCase().split('').reverse().filter((x) => {
      return x = !x.match(/[^0-9a-zA-Z]/g)
    })
    const cleanStr2 = s.toLowerCase().split('').filter((x) => {
      return x = !x.match(/[^0-9a-zA-Z]/g)
    })
     if(cleanStr1.join('') === cleanStr2.join('')){
       return true
     } else {
       return false 
     }
  };
  

  
  