function stair(n){
    for(let i=0; i<n; i++){
        const stars=i+1;
        const spaces=n-stars;
        
        for(let sp=0; sp<spaces; sp++){
            process.stdout.write(" ");
        }
        for(st=0; st<stars; st++){
            process.stdout.write("*");
        }
        console.log();
    }
}
stair(4);