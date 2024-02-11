
function capitalizeEachWord(str) {
    return str.replace(/\w\S*/g, function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
  }
  
  console.log(capitalizeEachWord("hello world")); // Hello World
  