// An array of words
let words = ["I", "love", "learning", "JavaScript", "programming"];

// Loop to construct a sentence by concatenating these words
let sentence = "";
for (let i = 0; i < words.length; i++) 
{
    if (i === 0) 
    {
        sentence += words[i];
    } else {
        sentence += " " + words[i];
    }
}

console.log(sentence);
