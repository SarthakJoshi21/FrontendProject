let n=12231;
let lastDigit=0;
let res=0;
let real=n;
while(n!=0){
    lastDigit=n%10;
    n=parseInt(n/10);
    res=(res*10)+lastDigit;
}
if(res==real){
    console.log("Palindrome");
}
else{
    console.log("Not a Palindrome");
}