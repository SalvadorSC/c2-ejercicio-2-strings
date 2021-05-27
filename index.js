const fraseEnSnakeCase = "camel_case_string";
const fraseEnCamelCase = "snakeCaseString";

console.log(fraseEnSnakeCase);
console.log("converted into...");

function convertCamelCase (frase){
  const fraseSeparada = frase.split("_");
  for (const i in fraseSeparada){
    const primeraLetra = fraseSeparada[i][0].toUpperCase();
    fraseSeparada[i] = fraseSeparada[i].replace(fraseSeparada[i][0],primeraLetra);
  }
  fraseSeparada[0] = fraseSeparada[0].replace(fraseSeparada[0][0],fraseSeparada[0][0].toLowerCase())
  console.log(fraseSeparada.join(""));
}

convertCamelCase(fraseEnSnakeCase);

console.log(fraseEnCamelCase);
console.log("converted into...");
function convertSnakeCase (palabra){
  const arr = [];
  for (const i in palabra){
    if(palabra[i] === palabra[i].toUpperCase()){
     arr.push(`_${palabra[i].toLowerCase()}`);
    }else{
      arr.push(palabra[i]);
    }
  }
  console.log(arr.join(""));
}

convertSnakeCase(fraseEnCamelCase);
