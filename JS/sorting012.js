let arr=[1,2,2,0,0,1,2,1,0];
let z=0; 
let o=0;
let t=0;
for(let v of arr){
    if(v==0){
        z++;
    }
    if(v==1){
        o++;
    }
    else{
        t++;
    }
}
let k=0;
for(let i=0; i<z; i++){
    arr[k]=0;
    k++
}
for(let i=0; i<o; i++){
    arr[k]=1;
    k++
}
for(let i=0; i<t; i++){
    arr[k]=2;
    k++
}
console.log(arr);