let total = 0;
let m1 = [ -2, 7, -3, 5 ];
let m2 = [ 40, 8, 10, 9 ];
let m3 = []

console.log(m1);
console.log(m2);
for( let i = 0; i <4; i++){
//total em 0 serve para aparecer o m1
    total += m1[i];
//push add um ou mais elementos no final e retorna novo comprimento
    m3.push((m1[i] + m2[i]));
    //[1] serve para retornar o for
}
console.log(m3);