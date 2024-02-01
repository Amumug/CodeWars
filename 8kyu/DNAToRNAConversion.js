// https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript
// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

function DNAtoRNA(dna) {
    return dna.split('T').join('U');
}