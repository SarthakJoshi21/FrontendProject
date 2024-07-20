function Upper(n){
for(let i=0; i<n-1; i++){
    const spaces=n-i-1;

    const stars=(2*i)+1;

    for(let sp=0; sp<spaces; sp++){
        process.stdout.write("  ");
    }
    for(let st=0; st<stars; st++){
        process.stdout.write("* ");
    }
    console.log();
}
}
function Lower(n){
    for(let i=n-1; i>=0; i--){
        const spaces=n-i-1;

    const stars=(2*i)+1;

    for(let sp=0; sp<spaces; sp++){
        process.stdout.write("  ");
    }
    for(let st=0; st<stars; st++){
        process.stdout.write("* ");
    }
    console.log();

    }
}
Upper(3);
Lower(3);