

var input = document.querySelector(".inputbar");



input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
   
    const user = document.querySelector(".inputbar").value;
  
  
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then((data) => {
        document.querySelector(".profilePhoto").src = `${data.avatar_url}`;
        document.querySelector(".githubName").textContent = `${data.login}`;
        document.querySelector(".folwersNum").textContent = `${data.followers}`;
        document.querySelector(
          ".folowingNum"
        ).textContent = `${data.following}`;
      });
    



    fetch(`https://api.github.com/users/${user}/repos`)
      .then((response) => response.json())
      .then((datas) => {
    

        while (document.querySelector(".card") !== null) {
          document.querySelector(".card").remove();
        }
        try {

          for (j = 0; j < 6; j+=2) {
          
            console.log(datas[j].name);
           
            let x=datas[j].language;
            if(x==null){
             x="";
              color="white";
            }else if(x=="CSS"){
             color="#563d7c";
            }
            else if(x=="HTML"){
             color="#e34c26";
            }
            else if(x=="JavaScript"){
             color="#f1e05a";
            }
             
            
            let k = document.createElement("div");
            k.setAttribute("class", "card");
            k.innerHTML = `<h3><a class="repoName" href="${datas[j].html_url}">${datas[j].name}</a></h3>
    <span class="repoType">puplic</span>
  
     <div class="lanType">
        <span
          class="repo-language-color"
          style="background-color: ${color}"
        
               ></span>
      
         ${x}
      </div>`;
   
      
            document.querySelector("#rightMain1").appendChild(k);
      
          }
      
        }
        catch(err) {
          console.log("stop");
        
        }
        try {
          for (j = 1; j < 6; j+=2) {
         
            console.log(datas[j].name);
          
            console.log(datas[j].name);
            let color="white";
           let x=datas[j].language;
           if(x==null){
            x="";
            color="white";
           }else if(x=="CSS"){
            color="#563d7c";
           }
           else if(x=="HTML"){
            color="#e34c26";
           }
            
          
            let k = document.createElement("div");
            k.setAttribute("class", "card");
            k.innerHTML = `<h3><a class="repoName"  href="${datas[j].html_url}" target="_blank" >${datas[j].name}</a></h3>
    <span class="repoType">puplic</span>
  
     <div class="lanType">
        <span
          class="repo-language-color"
          style="background-color: ${color}"
        
               ></span>
       ${x}
      </div>`;
            document.querySelector(".rightMain2").appendChild(k);
      
          }
      
        }
        catch(err) {
          console.log("stop");
        
        }
       
      });
  
    event.preventDefault();
  
   
  }
});

document.querySelector(".Comparison").addEventListener('click',function(){
window.open("/Comparison.html" , "_self")

});
document.querySelector(".logo").addEventListener('click',function(){
window.open("/index.html" , "_self")

});




