
  function multiplyRecursively(n, m) {
    //Write code here and print output
      if(n==1){
          return m;
      }
      else{
          return m + multiplyRecursively(n-1,m);
      }
    }
    console.log(multiplyRecursively(10,13));