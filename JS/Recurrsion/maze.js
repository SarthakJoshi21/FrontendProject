function path(n,m,i=1,j=1,ans=""){
    if(i==n && j==m){
        console.log(ans);
        return;
    }
    if(i>n || j>m){
        return;
    }
    path(n,m,i,j+1,ans+"h");
    path(n,m,i+1,j,ans+"v");
}
path(3,3)