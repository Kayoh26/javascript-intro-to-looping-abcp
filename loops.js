function forLoop(array){
  //Run code 25 times.
  for(let i=0; i<25;i++){
    //check if i = 1, if so you have to add a different string
    if (i===1){
      array.push(`I am ${i} strange loop.`)
    }else{
      array.push(`I am ${i} strange loops.`);  
    }
  }
  //send back array
  return array;
}

