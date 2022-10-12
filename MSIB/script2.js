let umur = 17;

if(umur <= 17){
    console.log("Masih kecil");
}else if(umur > 17 && umur <=30){
    console.log("Masih remaja");
}else if (umur > 30 && umur <=70) {
    console.log("Sudah Tua");
}else {
    console.log("Sudah meninggal")
}

let a = 15;
let b = 10;

console.log(a<20 && b>3); //jika kedua kondisi true = true
console.log(a<30 && b>5); //jika salah satu kondisi true= true

let c = 10; //number
let d = "10"; //string

console.log(c == d); //true
console.log(c == d); //false