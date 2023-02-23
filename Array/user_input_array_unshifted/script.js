let data_no; 
let container = [];
let posi;
let dta1;
let dta2;
let dta3;
let dta4;
let dta5;
let dta6;
function result() {
    data_no = +document.getElementById("data_no").value;
    posi = +document.getElementById("data_posi").value;
    dta1 = +document.getElementById("dta1").value;
    dta2 = +document.getElementById("dta2").value;
    dta3 = +document.getElementById("dta3").value;
    dta4 = +document.getElementById("dta4").value;
    dta5 = +document.getElementById("dta5").value;
    dta6 = +document.getElementById("dta6").value;
    // alert(data_no)
    // let i = 0;
    // while (i<data_no) {
    //     container[i] = i;
    //     i++;
    //     return container;
    // }
    for(i = 0;i<data_no;i++){
        container[i] = undefined;
    }
    console.log(container);
}