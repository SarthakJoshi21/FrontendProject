function ansSheet(n,ans){
let Sarthak="ABC";
let Ruchika="BACB";
let Rekha="AB";
let Hari="CCABA";
let a=0;
let b=0;
let c=0;
let d=0;
for( let i=0; i<n; i++){
    if(Sarthak[i%3]==ans[i]){
        a++;
    }
    if(Ruchika[i%4]==ans[i]){
        b++;
    }
    if(Rekha[i%2]==ans[i]){
        c++;
    }
    if(Hari[i%5]==ans[i]){
        d++;
    }
}
    let max=Math.max(a,b,c,d);
    console.log(max);
    if(max==d){
        console.log("Hari");
    }
    if(max==c){
        console.log("Rekha");
    }
    if(max==b){
        console.log("Ruchika");
    }
    if(max==a){
        console.log("Sarthak");
    }
}
ansSheet(7,"ABACACA");
