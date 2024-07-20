function UpperPyramid(n){
    for(let r=0; r<n; r++){
        const spaces=n-r-1;
        const stars=(2*r)+1;
        for(let sp=0; sp<spaces; sp++){
            process.stdout.write(" ");
        }
        for(let st=0; st<stars; st++){
            process.stdout.write("* ");
        }
        console.log();
    }
}
return UpperPyramid();