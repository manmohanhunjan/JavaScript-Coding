let start1=+prompt("Enter end number");
        let end1=+prompt("Enter end number");
        
        let sum1=0;
    while(start1<=end1){
        let j=2; 
        let flag=0;
        // while(j<start1+console.log(j))
        // for(j=2;j<start1;j++)
        while(j<start1){
                   if(start1%j==0){
                       
                            flag=1;
                            break;
                     }     
                  j++;           
                        
                }// console.log(j);   
                if((flag==0)&& (start1!=0)&&(start1!=1)){
                    sum1+=start1;
                    // console.log(sum1);
                    // console.log(i);
                } 
            start1++;
            }    console.log(sum1);