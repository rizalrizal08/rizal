let fruits = ["Apel","Mangga","Semangka","Anggur","Pisang"];
document.getElementById("demo").innerHTML = fruits;

// Join methods = untuk convert string beserta seperate operator
document.getElementById("demo2").innerHTML = fruits.join(" ");

//
fruits.pop();
document.getElementById("demo3").innerHTML = fruits;

fruits.push("kiwi");
document.getElementById("demo4").innerHTML = fruits;

fruits.shift();
document.getElementById("demo5").innerHTML = fruits;

fruits.unshift("Buah Naga");
document.getElementById("demo6").innerHTML = fruits;

let transportasi_darat = [ "Motor","Mobil","Bus"];
let transportasi_umum = ["Pesawat","Kapal","Kereta"];

let transportasi = transportasi_darat.concat(transportasi_umum,);
document.getElementById("demo7").innerHTML = transportas;

let fashion = ["Baju","Celana","Sepatu","Kaos"];
document.getElementById("demo8").innerHTML = fashion;

fashionn.splice(2,0,"Senda;");
document.getElementById("demo9").innerHTML = fashion;

const remove=fashion.slice(2);
document.getElementById("demo10").innerHTML = fashion;


