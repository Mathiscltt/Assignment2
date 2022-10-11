const click = document.getElementById("btn");
click.addEventListener("click", function (){
    let txt=document.getElementById("floatingInput").value;
    console.log("valeur rentré "+txt);
    if(txt!=""){
        let xhr = new XMLHttpRequest();
        const params = `text=${txt}`;
        xhr.open("GET","/texte?" + params,true);
        console.log("AJAX request sent : " + params);
        xhr.send();

        let xhr2 = new XMLHttpRequest();
        xhr2.open("GET","/name?"+params,true);
        xhr2.send();

        xhr.addEventListener('load',function(){
            console.log("phase 1");
            if(xhr.readyState == 4 && xhr.status == 200){
                console.log("phase 3");
                var response = JSON.parse(xhr.responseText);
                console.log("AJAX response : " + xhr.responseText);
                var insert = document.getElementById("text");
                insert.innerHTML= `You choose the name ${response.text}, this is the informations we have :\n\n`;

                if (this.readyState==4 && this.status==200) {
                    var info = document.getElementById("info");
                    info.innerHTML=this.response;
                }

            } else if(xhr.readyState==4 && xhr.status==404){
                alert("Erreur 404");
            }    
        })
        xhr2.addEventListener('load',function(){
            console.log("phase 1");
            if(xhr2.readyState == 4 && xhr2.status == 200){
                if (this.readyState==4 && this.status==200) {
                    var info = document.getElementById("info");
                    info.innerHTML=this.response;
                }

            } else if(xhr.readyState==4 && xhr2.status==404){
                alert("Erreur 404");
            }    
        })
    }
})

// function getText(){
//     console.log(document.getElementById("floatingInput").value);
//     const params = `text=${document.getElementById("floatingInput").value}`;
//     xhr.open("GET","/texte?" + params,true);
//     xhr.send();
//         console.log(this);
//         if(this.readyState == 4 && this.status == 200){
//             text.innerHTML= this.response;
//         } else if(this.readyState==4 && this.status==404){
//             alert("Erreur 404");
//         }    
// }