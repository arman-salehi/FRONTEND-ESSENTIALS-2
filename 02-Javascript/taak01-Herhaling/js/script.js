strNaam = prompt("Hoe heet je?");
boolNaamCorrect = confirm("Heet je echt " + strNaam +"?"); 

if(boolNaamCorrect == true) {
    alert("Welkom, " + strNaam +"!");
}

else {
    alert("Oei, ik weet niet hoe je heet, toch van harte welkom!");
}