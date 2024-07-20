function find(arr, n){
    if(n==0){
        return;
    }
    const el=arr[n-1];
     return find(arr,n-1);
}
console.log(find([1,2,3,4,5],5))