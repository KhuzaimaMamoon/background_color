let button=document.querySelectorAll(".one");
let body=document.querySelector("body");
button.forEach(function (button){
        button.addEventListener("click",function (e){
            if (e.target.id==="silver"){
                body.style.backgroundColor="silver";
            }
            else if (e.target.id==="red"){
                body.style.backgroundColor="red";
            }
            else if (e.target.id==="yellow"){
                body.style.backgroundColor="yellow";
            }
            else if (e.target.id==="green"){
                body.style.backgroundColor="green";
            }
            else if (e.target.id==="pink"){
                body.style.backgroundColor="pink";
            }
            else if (e.target.id==="white"){
                body.style.backgroundColor="white";
            }
            else if (e.target.id==="brown"){
                body.style.backgroundColor="brown";
            }
            else if (e.target.id==="orange"){
                body.style.backgroundColor="orange";
            }else if (e.target.id==="blue"){
                body.style.backgroundColor="blue";
            }
            else if (e.target.id==="purple"){
                body.style.backgroundColor="purple";
            }
        })
    }
)

