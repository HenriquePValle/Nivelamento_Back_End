let contador = 0;
let parada = false;

//Loop usando WHILE
while(parada){
    console.log(`Loop While - ${contador}`);
    contador++;
}
contador = 0;
//Loop usando o DO-WHILE
do {
    console.log(`Loop Do - ${contador}`);
    contador++;
} while(parada);
contador = 0;
//Loop usando o FOR
for(contador = 0; contador < 10; contador++){
    console.log(`Loop For - ${contador}`);
}