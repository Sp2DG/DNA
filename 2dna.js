// creating objects with same variable name

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna, 
    mutate() {  
      let x = (dna[0]);
      dna = mockUpStrand(); 
      while(x === dna[0]){
        dna = mockUpStrand();
      }
    },
    
    compareDNA( obj) {
      let porcentaje = 0;
      let r = 6.666;
      for(i=0; i<dna.length;){
        for(i; i<obj.dna.length;i++){
  if(dna[i] === obj.dna[i]){
    porcentaje += r;
  }
  }
}
console.log('specimen #1 and specimen #2 have '+porcentaje.toFixed(2) + '%'
+ ' DNA in common.');
    },
    willLikelySurvive(){
      let basePerCent = 0;
      let u = 6.667;
      for(let i=0; i<dna.length;i++){
  //console.log(primero.dna[i]);
          if(dna[i] === 'C'|| dna[i] === 'G'){
               basePerCent += u;
               //console.log('DNA base '+basePerCent.toFixed(2));
               }
          }
          if(basePerCent.toFixed(2)> 59.99){
            return true;
          }
          else {
            return false;
          }
        }  
    }
}


// automated object creator 

const survivingSpecimen = [];
let idCounter = 1;

while (survivingSpecimen.length < 30) {
  let newOrg = pAequorFactory(idCounter, mockUpStrand());
  if (newOrg.willLikelySurvive()) {
    survivingSpecimen.push(newOrg);
  }
  idCounter++;
}

console.log(survivingSpecimen)
