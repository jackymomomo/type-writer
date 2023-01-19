const sentence = "hello there from lighthouse labs";


const logEachLetterOneByOne = string => {
  for (let i = 0; i < string.length; i++){
    setTimeout(() => {
      process.stdout.write(string[i])
    }, i * 100);
  }
}

logEachLetterOneByOne(sentence)
