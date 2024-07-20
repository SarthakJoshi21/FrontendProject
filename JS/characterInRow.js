let row1="qwertyuiop";
let row2="asdfghjkl";
let row3="zxcvbnm";
let arr=['dad','boy','pot'];
function getRow(char){
    if(row1.includes(char)){
        return 1;
    }
    if(row2.includes(char)){
        return 2;
    }
    if(row3.includes(char)){
        return 3;
    }
}
for(let word of arr){
    const row=getRow(word[0]);
    let isSame=true;
    for(let i=1; i<word.length; i++){
        const char=word[i];
        const newRow=getRow(char);
        if(newRow!==row){
             isSame=false;
            break;
        }
    }
    if(isSame){
        console.log(word);
    }
}