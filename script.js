const getcolor=()=>{
    //color code 
    const randomnumber= Math.floor(Math.random()*1677251);
    
    const randomCode="#" + randomnumber.toString(16);
    // console.log(randomnumber , randomCode);
    document.body.style.backgroundColor=randomCode;
    document.getElementById("Colorcode").innerText=randomCode

    navigator.clipboard.writeText(randomCode);
}
// event call
document.getElementById("colorButton").addEventListener(
    "click",getcolor
)
// init call 
getcolor();