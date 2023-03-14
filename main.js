// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  console.log(returnRandBase());
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  const pAequorFactory = (number, array) => {
    return {
      specimenNum : number,
      dna: array,
      mutate () {
        const newBaseIndex= Math.floor(Math.random() *15);
        let newBase = returnRandBase()
        while(this.dna[newBaseIndex] === newBase) {
          newBase = returnRandBase();
        }
        this.dna[newBaseIndex] = newBase;
        return this.dna;
        
      },
      compareDna (object) {
        const otherDna = object.dna; 
        let inCommunDna = 0;
        for(let i= 0; i < otherDna.length; i++ ){
   
          if(this.dna[i]===otherDna[i])
          inCommunDna ++;
          }
         const calculPourcentage = (inCommunDna)=>{
           return 100*inCommunDna/15;
         }
         const pourcentage = calculPourcentage(inCommunDna);
         const otherSpecimenNumber = object.specimenNum
        //console.log(`specimen ${this.specimenNum} and ${otherSpecimenNumber} have ${pourcentage}% DNA in common `)
      },
      willLikelySurvive (){
        const countC = this.dna.reduce((accumulateur, current)=>
        {
          if(current ==='C'){
            return accumulateur +1;
          } else return accumulateur;
        }, 0) ;
  
        const countG = this.dna.reduce((accumulateur, current)=>
        {
          if(current ==='G'){
            return accumulateur +1;
          } else return accumulateur;
        }, 0) ;
        const survivalRateC = 100*countC/15;
        const survivalRateG = 100*countG/15;
         // console.log (`il y a ${survivalRateC}% de C et ${survivalRateG}% de G`);
        if (survivalRateC>=60 || survivalRateG>=60 ){
          return true;
        } else return false 
      },
      willSurvive (){
        while(this.willLikelySurvive()!==true){
          let newDna = mockUpStrand();
          this.dna = newDna;
           } return this.dna;
      }
    }
  }  
  
  /*
  Test
  const newPaequor = pAequorFactory(5,mockUpStrand());
  console.log(newPaequor.dna);
  newPaequor.mutate();
  console.log(newPaequor.dna);
  
  const newPaequorTwo = pAequorFactory(3,mockUpStrand());
  console.log(newPaequorTwo.dna);
  newPaequor.compareDna(newPaequorTwo);
  console.log(newPaequor.willLikelySurvive());
  
  for (let i=1; i>=30; i++){
  const paequori
  
  const survivePaequor = pAequorFactory(1,mockUpStrand());
  survivePaequor.willSurvive();
  */

const factory = ()=> {
    const survivingPaequor = [];
    for (let i = 1; i<=30; i++ ) {
      let paequorInstance = pAequorFactory(i,mockUpStrand())
    survivingPaequor.push(paequorInstance.willSurvive());
    } 
    return survivingPaequor;
  }
  
  const selection = factory();
  console.log(selection);

  const printPaequor = (array) => {
    array.forEach (sequence => {
        console.log(sequence)
    })
  };

  printPaequor(selection);