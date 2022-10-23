let dna = require("./brca1.json");
// let dna = require("./dna1.json");
// let dna = require('./dna2.json');

let genesNumber = 0;
let longestGene = "";
let shortestGene = "";

let startIndex = dna.indexOf("atg"); // find fist start codon
while (startIndex !== -1) {
  // if there is start codon
  let endIndex = -1; // set no end index as default

  for (let i = startIndex + 3; endIndex === -1 && i < dna.length; i += 3) {
    // loop, starting at index of next codon after the start codon,
    // and jump 3 at a time (3 is a codon!),
    // finish loop if no more dna left or we found end of gene
    if (dna[i] === "t") {
      if (
        (dna[i + 1] === "a" && (dna[i + 2] === "a" || dna[i + 2] === "g")) || // taa or tag
        (dna[i + 1] === "g" && dna[i + 2] === "a") // tga
      ) {
        endIndex = i; // mark end
        genesNumber++; // add gene

        let currentGene = dna.slice(startIndex, i + 3);
        if (currentGene.length > longestGene.length) {
          longestGene = currentGene;
        }
        if (currentGene.length < shortestGene.length || !shortestGene) {
          shortestGene = currentGene;
        }

        startIndex = dna.indexOf("atg", endIndex + 3); // get next starting codon
      }
    }
  }

  if (endIndex === -1) {
    startIndex = -1;
  }
}
console.log("Number of genes is: " + genesNumber);
console.log("Shortest gene is: " + shortestGene);
console.log("Longest gene is: " + longestGene);
