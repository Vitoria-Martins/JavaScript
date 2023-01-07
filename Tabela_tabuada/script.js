/*

TABUADA SIMPLES COM VALOR DO USUARIO

var valor = prompt("Digite um valor")

 1 define inicio 11 define o final
for(var a = 1; a < 11;  a++) {
    document.write( valor + "x" + a + "="+   
    (valor * a) + "<br>");
}

*/

for( var a = 1; a < 21; a++){
    document.write("<p>Tabuada do " + a + "</p>" );
    for(var b = 1; b < 21; b++){
        document.write(a + "x" + b + "=" + (a*b) + "<br>");
    }
}


