function sumD(n, sum=0){
    if(n==0){
        return sum;
    }
    return n+ sumD(parseInt(n/10),sum);
}
console.log(sumD(1234))