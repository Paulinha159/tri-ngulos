const prompt = require ('prompt-sync')();
const triangulos = [];
while(true){
    let a = +prompt("Lado A:" )
    let b = +prompt("Lado b:" )
    let c = +prompt("Lado c:" )
    if (a>0 && b> 0 && c>0 && a + b > c && a + c > b && c + b > a){

        let tipo;
        if (a==b && b==c && a==c) {
            tipo = "equilatero" ; 
            else if ( a== b && a==c  ){

            }
        }
    }
}