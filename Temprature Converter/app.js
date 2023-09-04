const celsiusField=document.querySelector("#celsius")
const degree=document.querySelector("#degree")
const convertBtn=document.querySelector("#convert-btn")
const tempType=document.querySelector("#temp-type")


window.addEventListener("load",()=>{
    degree.value="";
    celsiusField.innerHTML="";
})

convertBtn.addEventListener("click",(e)=>{
          e.preventDefault();
          convertToCelsius();

          convertBtn.innerHTML="<span><i class='fa fa-spinner fa-spin'></i>Converting..</span>";
          setTimeout(()=>{
            convertBtn.innerHTML="<span>Convert</span>";
          },1000)


})

function convertToCelsius(){

    console.log("function called");
    let inputValue=degree.value;

    setTimeout(()=>{

    if(tempType.value ==="farniheit"){
        
        const farnheitToCelsius=(inputValue-32)*(5/9);
        celsiusField.innerHTML=`${farnheitToCelsius.toFixed(3)} &deg;C`
    }
    else if(tempType.value ==="kelvin"){
        const kelvinToCelsius=inputValue-273.15;
        celsiusField.innerHTML=`${kelvinToCelsius.toFixed(3)} &deg;C`

    }
      },1200)
}