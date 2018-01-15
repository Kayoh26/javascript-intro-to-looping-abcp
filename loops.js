function forLoop(array){
  for(let i=0; i<25;i++){
    //check if i = 1, if so you have to add a different string
    if (i===0){
      array.push(`I am ${i} strange loop.`)
    }else{
      array.push(`I am ${i} strange loops.`);  
    }
  }
}