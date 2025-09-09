const arr = [`orange`, `apple`,`grapes`,`bananaa`,`orange`, `apple`,`grapes`,`bananaa`,'watermelon','papaya']
// Count of each fruit in object

const result = arr.reduce((acc,curr)=>{
    if(acc.hasOwnProperty(curr)){
        acc[curr] += 1;
    }else{
        acc[curr] = 1; 
    }
    return acc;
},{})

console.log(result);

