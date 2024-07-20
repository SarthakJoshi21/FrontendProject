function per(str,ans=""){
    if(str===""){
        console.log(ans);
        return;
    }
    for(let i=0; i<str.length; i++){
        const cur=str[i];
        const rest=str.slice(0,i)+str.slice(i+1);
        per(rest,ans+cur);
    }
}
per("ABC");