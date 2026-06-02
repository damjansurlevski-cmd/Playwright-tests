let words: string[] = ["cat", "elephant", "dog", "butterfly", "ox", "giraffe"];
let newWords: string[] = [];

for (let i = 0; i < words.length; i++) {
  if (words[i].length > 3) {
    newWords.push(words[i]);
  }
}
for (let i = 0; i < newWords.length; i++) {
  console.log(newWords[i].toUpperCase());
}