let nomes = ["Amir","Bemir","Cemir"];
console.log(nomes.includes("Bemir"));
console.log(nomes.includes("Amir"));

if (nomes.includes("Amir")){
    console.log("nome encontrado");
    
}else{
    console.log("nome não encontrado");
}

let aluno = "Albano";

console.log(aluno.startsWith("alb"));
console.log(aluno.startsWith("Alb"));

console.log(aluno.endsWith("ano"));
console.log(aluno.endsWith("an0"));