function path(n, ans=""){
    if(n===0){
        console.log(ans);
        return;
    }
    if(n<0){
        return;
    }
    path(n-1,ans+'1');
    path(n-2,ans+'2');
    path(n-3,ans+'3');
}
path(3);