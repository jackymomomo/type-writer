const sentence = "hello there from lighthouse labs";


const logEachLetterOneByOne = string => {
  for (let char of string){
    setTimeout(() => {
      console.log(char)
    }, char * 100);
  }
}

logEachLetterOneByOne(sentence)
