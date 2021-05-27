const a = "camel-case-string";
const b = "snakeCaseString";

console.log(a);
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

convertCamelCase(a);

console.log(b);
console.log("converted into...");

function convertSnakeCase (palabra){
  const arr = [];
  for (const i in palabra){
    if(palabra[i] === palabra[i].toUpperCase()){
     arr.push(`-${palabra[i].toLowerCase()}`);
    }else{
      arr.push(palabra[i]);
    }
  }
  console.log(arr.join(""));
}


convertsnakeCase(b);
