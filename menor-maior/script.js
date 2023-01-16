function mm(){

    let numbers = [29, 9, 13, 02, 10];

    console.log(numbers);

    numbers.sort((a,b) => a - b);
    //esse parametro para comparacao entre os numeros para que 13 seja maior que 2( por padrao sistema entente que o 1 do 13 vem primeiro que o 2);
    
    return numbers
}
console.log(mm());
