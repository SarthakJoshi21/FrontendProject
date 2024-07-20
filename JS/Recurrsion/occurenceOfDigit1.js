function digit1(n,cnt=0){
    if(n==0){
        return cnt;
    }
    if(n==1){
        return digit1(Math.floor(n/10),cnt+1);
    }
}
console.log(digit1(1231));