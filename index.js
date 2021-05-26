const a = "camel-case-string";
const b = "snakeCaseString";

function convertCamelCase (frase){
  const x = frase.split("-")
  for (const i in x){
    const primeraLetra = x[i][0].toUpperCase();

    x[i] = x[i].replace(x[i][0],primeraLetra)
  }
  x[0] = x[0].replace(x[0][0],x[0][0].toLowerCase())

  /* console.log(x.join("")) */
}

convertCamelCase(a)

function convertsnakeCase (palabra){
  const arr = []
  for (const i in palabra){
    if(palabra[i] === palabra[i].toUpperCase()){
     arr.push(`-${palabra[i].toLowerCase()}`)
    }else{
      arr.push(palabra[i])
    }
  }
  console.log(arr.join(""))
}

convertsnakeCase(b)