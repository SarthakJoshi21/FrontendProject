let arr=[7,8,7,6,5,2,1];
let cnt=1;
let max=0;
let ele;
for(let i=0; i<arr.length; i++){
    if(arr[i]==arr[i-1]){
        cnt++;
    }
    else{
        cnt=1;
    }
    if(cnt>max){
        max=cnt;
        ele=arr[i];
    }
}
console.log(ele);