function ver(s){
    let res = s.split('')
    let count = 0
    for(let i = 0; i < res.length;i++){
        if(res[i] === 'a' || res[i] === 'A'){
            count++;
        }
    }
    return count;
}

let s = 'AbCAd'
let res = ver(s)
if(res > 0){
    console.log(`A letra 'a' ou 'A' apareceu ${res} vezes`);    
}else{
    console.log("A letra 'a' ou 'A' não apareceu");
}