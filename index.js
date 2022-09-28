//Code your solutions in this file
//#1
function fiveToOneHundred() {
    for(let i = 5; i <= 100 ; i += 1) {
        console.log(i)
    }
};
fiveToOneHundred()

//2
const multiplesOfThree = () => {
  for (let i = 3; i <= 100; i += 3) {
      console.log(i);
  }  
};

console.log(multiplesOfThree());

//3
const multiplesOfThreeOrFive = () => {
    for ( let i = 3; i <= 100; i ++ ) {
        if ((i % 3 === 0) || (i%5 === 0)) 
        console.log(i)
    }
    
};
multiplesOfThreeOrFive()