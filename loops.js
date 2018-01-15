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
  //Return array after adding strings.
  return array;
}

function whileLoop(number){
  while(number>0){
    console.log(--number);
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do{
    
  }while(maybeTrue());
  return array;
}