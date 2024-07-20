function pro(n){
    if(n==0){
        return 1;
    }
    return n * pro(n-1);
}
const out=pro(5);
console.log(out);