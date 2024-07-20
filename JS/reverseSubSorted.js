/*let arr=[1,2,7,6,5,4,3,8,9];
function isReverse(){
let s=-1;
for(let i=0; i<arr.length; i++){
    if(arr[i]>arr[i+1]){
        s=i;
        break;
    }
}
console.log(s);
if(s==-1){
    return "Yes";
}
let e=-1;
for(let i=arr.length-1; i>=0; i--){
    if(arr[i]<arr[i-1]);{
    e=i;
    break;
}
}
console.log(e);

let isDecreasing=true;
for(let i=s; i<e; i++){
    if(arr[i]<arr[i+1]){
        isDecreasing=false;
        break;
    }
}
if(!isDecreasing){
    return "No";
}
if(arr[s]>arr[e+1]){
    return "No";
}
if(arr[e]<arr[s-1]){
    return "No";
}
return "Yes";
}
let out=isReverse();
console.log(out);
*/
//function abc(a){
 //   var x=3;
   // var y=4;
   // var o=xyz(x,y);
    //return o+a;
//}
//function xyz(x,y){
//    var p=4;
//    return p+x+y;
//}
//const ans=abc(4);
//console.log(ans);
function abc(N){
    if(N==0){
        return;
    }
    console.log("Ac");
    abc(N-1);

}
abc(N);