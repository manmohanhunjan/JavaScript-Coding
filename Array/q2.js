let a = [
    [[1, 2, 3, 4], [5, 6], [7], [8, 7], [10]],
    [
      [11, 12],
      [13, 14],
    ],
    [[15, 16], [17, 18], [19]],
  ];

let i  = 0;
while (i<a.length) {
    let j = 0;
    while (j<a[i].length) {
        let k = 0;
        while (k<a[i][j].length) {
            a = a[i][j][k];
            k++;
        }
        j++;
    }
    i++;
}
console.log(a);