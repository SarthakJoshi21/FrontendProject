function power(n,m){
    if(m==0){
        return 1;
    }
    const ans= power(n,Math.floor(m/2));
    if(m%2==0){
        return ans*ans;
    }
    else{
        return ans*ans*n;
    }
}
const out=power(5,3);
console.log(out);