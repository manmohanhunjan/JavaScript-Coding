const arr = [
    [
      [[1, 2, 3, 4], [5, 6], [7], [8, 9], [10]],
      [
        [11, 12],
        [13, 14],
      ],
      [[15, 16], [17, 18], [19]],
    ],
  ];
  let i = 0;
  while (i < arr.length) {
    let j = 0;
    while (j < arr[i].length) {
      let k = 0;
      while (k < arr[i][j].length) {
        let l = 0;
        while (l < arr[i][j][k].length) {
          //Armstrong Start
          let pno = arr[i][j][k][l];
          let no = arr[i][j][k][l];
          // console.log(no);
          var summm = 0;
          let check = no;
          while (no > 0) {
            let temp = no % 10;
            temp = temp;
            summm += temp;
            no = parseInt(no / 10);
          }
          if (summm == check) {
            console.log(check);
          }
  
          //Armstrong End
  
          //Prime Start
          let st_pno = 2;
          let store = 0 ;
          while (st_pno < pno) {
            let tracker = 0;
            let inner_st = 2;
            while (inner_st < pno) {
              if (st_pno % inner_st == 0) {
                // console.log(i + "is Not a Prime");
                tracker = 1;
                break;
              }
              inner_st++;
            }
            if (tracker == 0 && st_pno != 0 && st_pno != 1) {
              store += pno;
            }
            st_pno++;
            console.log("prime" + store)
          }
  
          l++;
        }
        k++;
      }
      j++;
    }
    i++;
  }