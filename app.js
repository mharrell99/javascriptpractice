// Spinal Tap CasePassed

function spinalCase(str) {
    var regex = /\s+|_+/g;
  
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    return str.replace(regex, "-").toLowerCase();
  }
    
    console.log(spinalCase('This Is Spinal Tap'));
  
  
  
    // Search and ReplacePassed
  
    function myReplace(str, before, after) {
        var index = str.indexOf(before);
  
      if (str[index] === str[index].toUpperCase()) {
          after = after.charAt(0).toUpperCase() + after.slice(1);
      } else {
          after = after.charAt(0).toLowerCase() + after.slice(1);
      }
          str = str.replace(before, after);
          return str;
    }
    
    console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
  
  
    // DNA Pairing
  
    function pairElement(str) {
    
      var paired = [];
      var search = function(char) {
        switch (char) {
          case "A":
            paired.push(["A", "T"]);
            break;
          case "T":
            paired.push(["T", "A"]);
            break;
          case "C":
            paired.push(["C", "G"]);
            break;
          case "G":
            paired.push(["G", "C"]);
            break;
        }
      };
    
      for (var i = 0; i < str.length; i++) {
        search(str[i]);
      }
    
      return paired;
    }
    console.log(pairElement("GCG"));