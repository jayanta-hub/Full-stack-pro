const GM="GM";
const GN="GN";
let gmAction = ()=>{
    console.log("Action invoking");
    return{type:GM}
};
let gnAction =()=>{
    return{type:GN}
};
export {gmAction,gnAction,GM,GN};