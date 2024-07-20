function pattern(n,){
    if(n==0){
        return
    }
    pattern(n-1)
    console.log("* ".repeat(n))
}
pattern(5);