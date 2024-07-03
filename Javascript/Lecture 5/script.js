// If else Statement

/* Icecream Production */

{
  let RawMaterial = "Milk";
  let Storage = false;
  let Production = true;
  let Blending = true;
  let Pasteurization = true;
  let Flavor = "chocolate";
  let Freezing = true;

  // if (RawMaterial == "Milk") {
  //   console.log("Icecream is ready for production !!");
  // }
  // else{
  //   console.log("Production Off !!");
  // }

  // if (RawMaterial == "Milk") {
  //   console.log("Icecream is ready for production !!");
  // }
  // else if(Production == true){
  //   console.log("Icecream Production has been started !!");
  // }
  // else if(Blending == true){
  //   console.log("Icecream Production Blending has been started !!");
  // }
  // else if(Pasteurization == true){
  //   console.log("Icecream Production Pasteurization has been started !!");
  // }
  // else if(Flavor == "mango"){
  //   console.log("Icecream Production Mango flavor has been started !!");
  // }
  // else if(Freezing == true){
  //   console.log("Icecream Production Mango Freezing mode has been started !!");
  // }


  /* This triangular shape code is known as call back */
  // if (RawMaterial == "Milk") {
  //   console.log("Icecream is ready for production !!");
  //   if (Production == true) {
  //     console.log("Icecream Production has been started !!");
  //     if (Blending == true) {
  //       console.log("Icecream Production Blending has been started !!");
  //       if (Pasteurization == true) {
  //         console.log("Icecream Production Pasteurization has been started !!");
  //         if (Flavor == "chocolate") {
  //           console.log("Icecream Production Mango flavor has been started !!");
  //           if (Freezing == true) {
  //             console.log("Icecream Production Mango Freezing mode has been started !!");
  //           }
  //         } 
  //       } 
  //     } 
  //   } 
  // } 


  /* Switch case Statement */
  {
    let subject = "science";

    switch(subject){
      case "maths": console.log("Math Book");
      break;
      case "chemistry": console.log("Chemistry Book");
      break;
      case "history": console.log("History Book");
      break;
      case "english": console.log("English Book");
      break;
      case "physics": console.log("Physics Book");
      break;
      default: console.log("No match Book");
    }
  }
  
}
