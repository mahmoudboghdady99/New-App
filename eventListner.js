
let btn =document.getElementById('btn')

btn.addEventListener("click", function(){

    let first =document.getElementById('first').value
    let second =document.getElementById('second-input').value;
try{
    let results = devide(Number(first), Number(second))
    document.getElementById("resulte").innerHTML=results
}
catch (error){
    document.getElementById("resulte").innerHTML=error
}
   
        
})