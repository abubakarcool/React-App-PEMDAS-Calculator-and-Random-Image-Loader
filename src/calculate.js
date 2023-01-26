// let inn1 =  "(4*4/1)*(1+2)"; //"3+9/3*3";
// const inn = [...inn1]; //    [    '(', '4', '*', '2', ')', '*', '(', '1', '+', '2', ')'     ]
// obj=[];
// inn.forEach(element => {
//     obj.push(element);
// });

function noOfOperators(params) { //nnumber of operators check kar raha hai aik object me phir utni dafa arthematic operation hon gay
    let i=0;
    for (let kk = 0; kk < params.length && params.length>1; kk++) {
        if(params[kk] == '+' || params[kk] == '-' || params[kk] == '*' || params[kk] == '/'){
            i++;
    }
        
    }
    return i;
}
function arthimatic(number1, number2, operator) {
    switch (operator) {
        case '+':
            return parseInt(number1)+parseInt(number2);
            break;
        case '-':
            return parseInt(number1)-parseInt(number2);
            break;
        case '*':
            return parseInt(number1)*parseInt(number2);
            break;
        case '/':
            return parseInt(number1)/parseInt(number2);
            break;
        default:
            break;
    }
}
function customslicer(array,start,end) {
    let newarray =[];
    for (let ooo = 0; ooo < array.length; ooo++) {
        if(ooo<start || ooo >end){
            newarray.push(array[ooo]);
        }    
    }return newarray;
}
function checkGoodBrackets(inn) { // error check kar raha hai brackets evan number me honi chaheya
    let leftbrack = 0;
    let rightbrack = 0;
    inn.forEach(element => {
        if(element == '('){
            leftbrack++;
        }
    });
    inn.forEach(element => {
        if(element == ')'){
            rightbrack++;
        }
    });
    if(leftbrack == rightbrack){
        return true;
    }else{
        return false;
    }
}
function checker(music,start,end) {
    if(music==start){
        return "equal";
    }
    else if((music < start) || (music >end)){
        return "out";
    }
    else{
        return "in";
    }
}
function unshiftPush(array,start,end,newvalue) {
    let newarray =[];
    console.log("start = "+start+", end = "+end+ ", newvalue ="+newvalue);
    for (let music = 0; music < array.length; music++) {
            let result = checker(music,start,end);
            if(result=='equal'){
                newarray.push(newvalue);
                // console.log("music value : "+music+" Equal to 2")
            }
            else if(result == 'out'){
                newarray.push(array[music]);
                // console.log("music value : "+music+"less than 2 or greater than 4")
            }
            else{
                // console.log("music value : "+music+" is in between 2 and 4")
            }
            console.log('array unshiftPush is as now : -  ' + newarray);
    } return newarray;
}
function doesBrackets(params) {
    let aa= false;
    params.forEach(element => {
        if(element=='(' || element==')'){
            aa=true;
        }
    }); 
    return (aa == true ? true : false);
}
function sipmlee(tempObj1) {
    let start =0; let end =0;
    console.log("sipmlee top calculation:- "); console.log(tempObj1);
    for (let j = 0; j < noOfOperators(tempObj1); j++) {
        for (let i = 0; i < tempObj1.length; i++) {
            if(tempObj1[i]=='/'){
                let hah=arthimatic(tempObj1[i-1],tempObj1[i+1],tempObj1[i]); 
                tempObj1[i-1] = hah;
                start= i-1;
                end = i+1;
                tempObj1[start]=hah;
                tempObj1= unshiftPush(tempObj1,start,end,hah);
                console.log("sipmlee top divide calculation:- "); console.log(tempObj1);
                break;
            }            
        }
        for (let i = 0; i < tempObj1.length; i++) {
            if(tempObj1[i]=='*'){
                let hah=arthimatic(tempObj1[i-1],tempObj1[i+1],tempObj1[i]);
                tempObj1[i-1] = hah;
                start= i-1;
                end = i+1;
                tempObj1= unshiftPush(tempObj1,start,end,hah);
                console.log("sipmlee top multiply calculation:- "); console.log(tempObj1);
                break;
            }            
        }
        for (let i = 0; i < tempObj1.length; i++) {
            if(tempObj1[i]=='+'){
                let hah=arthimatic(tempObj1[i-1],tempObj1[i+1],tempObj1[i]);
                tempObj1[i-1] = hah;
                start= i-1;
                end = i+1;
                tempObj1= unshiftPush(tempObj1,start,end,hah);
                console.log("sipmlee top plus calculation:- "); console.log(tempObj1);
                break;
            }            
        }
        for (let i = 0; i < tempObj1.length; i++) {
            if(tempObj1[i]=='-'){
                let hah=arthimatic(tempObj1[i-1],tempObj1[i+1],tempObj1[i]);
                tempObj1[i-1] = hah;
                start= i-1;
                end = i+1;
                tempObj1= unshiftPush(tempObj1,start,end,hah);
                console.log("sipmlee top minus calculation:- "); console.log(tempObj1);
                break;
            }            
        }
    }return tempObj1;
}
function arraydeleter(array,iteration) { //new array bana k day ga aor iteration number delte kar k 
    let newarray = [];
    for (let index = 0; index < array.length; index++) {
        if(index != iteration){
            newarray.push(array[index]);
        }
    }return newarray;
}
// console.log(obj);
// console.log(doesBrackets(obj));
// console.log(checkGoodBrackets(obj));
function main(array1) {
    const inn = [...array1]; //    [    '(', '4', '*', '2', ')', '*', '(', '1', '+', '2', ')'     ]
    let obj=[];
    inn.forEach(element => {
        obj.push(element);
    });
    if(doesBrackets(obj)){ // sab sey pehlay hum brackets hain tou brackets check karen gay
        let tempObj = obj;
        for (let lala = 0; lala < noOfOperators(tempObj)+1; lala++) { //yeh utna hi chalay ga jitnay hamara pas operators hain
            let strt= 0; let end = 0; 
            for (let index = tempObj.length-1; index >=0; index--) {
                if(tempObj[index] == '(' ){
                    strt = index;
                }
                if(tempObj[index]  == ')'){
                    end = index;
                }
            }
            let tempObj1 = tempObj.slice(strt+1,end);   //tempObj1 contains the first slice which has brackets
            let backUpTempObj =tempObj;                 // backUpTempObj has the backup
            tempObj = customslicer(tempObj,strt,end);               // tempObj has the rest of pieace which is left & slicing goes to tempObj1
            console.log("new tempObj :- "); console.log(tempObj);       // part left
            console.log("new tempObj1 :- "); console.log(tempObj1);     //sliced part
            for (let j = 0; j < noOfOperators(tempObj1); j++) {
                for (let i = 0; i < tempObj1.length; i++) {
                    if(tempObj1[i]=='/'){
                        let hah=arthimatic(tempObj1[i-1],tempObj1[i+1],tempObj1[i]); 
                        tempObj1 = arraydeleter(tempObj1,[i+1]);
                        tempObj1 = arraydeleter(tempObj1,[i]);
                        tempObj1[i-1] = hah;
                    }            
                }
                for (let i = 0; i < tempObj1.length; i++) {
                    if(tempObj1[i]=='*'){
                        let hah=arthimatic(tempObj1[i-1],tempObj1[i+1],tempObj1[i]);
                        tempObj1 = arraydeleter(tempObj1,[i+1]);
                        tempObj1 = arraydeleter(tempObj1,[i]);
                        tempObj1[i-1] = hah;
                    }            
                }
                for (let i = 0; i < tempObj1.length; i++) {
                    if(tempObj1[i]=='+'){
                        let hah=arthimatic(tempObj1[i-1],tempObj1[i+1],tempObj1[i]);
                        tempObj1 = arraydeleter(tempObj1,[i]);
                        tempObj1 = arraydeleter(tempObj1,[i+1]);
                        tempObj1[i-1] = hah;
                    }            
                }
                for (let i = 0; i < tempObj1.length; i++) {
                    if(tempObj1[i]=='-'){
                        let hah=arthimatic(tempObj1[i-1],tempObj1[i+1],tempObj1[i]);
                        tempObj1 = arraydeleter(tempObj1,[i]);
                        tempObj1 = arraydeleter(tempObj1,[i+1]);
                        tempObj1[i-1] = hah;
                    }            
                }
            }
            console.log("after calculation tempObj1 :- "); console.log(tempObj1);
            tempObj = unshiftPush(backUpTempObj,strt,end,tempObj1[0]);
            console.log("tempObj after calculation:- "); console.log(tempObj);
            if(!doesBrackets(tempObj)){
                console.log("final : - "); 
                return sipmlee(tempObj);
            }
            else{
                console.log("final : -"); console.log(tempObj);
            }
        }
    }
    else{
        console.log("not in barackets");
        let tempObj = obj;
        let result1=sipmlee(tempObj)
        console.log(result1);
        return result1;
    }
}
export default function Calculate(inputString){
    try {
        let result2 = main(inputString);
        console.log(result2);

        if(Array.isArray(result2)){
            console.log("yes array");
            return result2[0];
        }
        else{
            console.log("not array");
            return result2;
        }
    } catch (error) {
        return "Error";
    }
}
//console.log(obj);
// unshiftPush([
//     '3', '+', '9', '/', '3', '*', '3'
//     ], 2,4,3
// );