const reticle = document.querySelector(".reticle");
const body = document.querySelector("body");
const score = document.querySelector(".scoreNumber");
const timer = document.querySelector(".timeLeft")

for(let i=0; i<300;i++){
    //Creem un element de imagine.
    const image = document.createElement("img");
    
    image.addEventListener("click", ()=>{
      image.style.display = "none";
      console.log(image.classList[0])
      if(image.classList[0] === "mosquito"){
        score.innerHTML= parseInt(score.innerHTML) + 1;
      }
      else{
        score.innerHTML= parseInt(score.innerHTML) - 2;
      }
    })

    //Sa ii zicem sursa acestui element creat.
    if( Math.floor(Math.random() * 5) === 3){
      image.src = "./img/butterfly.png";
      image.classList.add("butterfly");
    }else{
      image.src = "./img/mosquito.png";
      image.classList.add("mosquito");
    }
  

    //Sa il pozitinam random in pagina.
    image.style.left =  Math.floor(Math.random() * ((window.innerWidth - 150) - 100 + 1) + 50) + "px";
    image.style.top =  Math.floor(Math.random() * ((window.innerHeight - 150) - 100 + 1) + 50) + "px";

    //Sa ii zicem parintelui sa foloseasca acest element creat.
    setTimeout(()=>{
      body.appendChild(image)
    }, i * Math.floor(Math.random() * 2000))
    
    
}
for(let i=0; i<60;i++){
  setTimeout(()=>{
    timer.innerHTML = parseInt(timer.innerHTML) - 1;
    if(timer.innerHTML === "0"){
      if(parseInt(score.innerHTML) >=70){
        alert("Ai castigat")
      }
      else{
        alert("Ai terminat");
      }  ;
    }
  }, i*1000)

}

window.addEventListener("mousemove", (event) => {
  let newX = event.clientX - 100;
  let newY = event.clientY - 100;
  reticle.style.left = newX + "px";
  reticle.style.top = newY + "px";
});

