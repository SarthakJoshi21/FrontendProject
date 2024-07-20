let sum=0;
function sumOfNatural(n){
    if(n==0){
        return;
    }
    sum+=n;
    sumOfNatural(n-1);
}
sumOfNatural(5);
console.log(sum);
