//op 1 2 3 4 5 6 7 --- 15 16 17 18 19 20

for (let i = 1; i<20;i++){
    if (i > 7 && i< 15){
        continue;
    }
    console.log(i);
}