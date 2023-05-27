let input1 = document.querySelector(".comparisonOneSearch");

input1.addEventListener("keyup", function s (event) {
  if (event.keyCode === 13) {
  
    const user = document.querySelector(".comparisonOneSearch").value;

    fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then((data) => {
    let  ph1=  document.querySelector(".photo1").src = `${data.avatar_url}`;
  
    let n1=   document.querySelector(
          ".comparisonOneName"
        ).textContent = `${data.login}`;
    

      let f1= document.querySelector(
          ".numOfFollowers1"
        ).textContent = `${data.followers}`;
      

      let  r1=document.querySelector(
          ".numOfRepos1"
        ).textContent = `${data.public_repos}`;
       
        
      });
      
  }
  
});




let input2 = document.querySelector(".comparisonTwoSearch");
input2.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    const user = document.querySelector(".comparisonTwoSearch").value;

    fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then((data) => {
        document.querySelector(".photo2").src = `${data.avatar_url}`;
        document.querySelector(
          ".comparisonTwoName"
        ).textContent = `${data.login}`;

        document.querySelector(
          ".numOfFollowers2"
        ).textContent = `${data.followers}`;

        document.querySelector(
          ".numOfRepos2"
        ).textContent = `${data.public_repos}`;
  
      });
  }
});
let fight=document.querySelector(".fight");
fight.addEventListener('click',function(e){
  let f1=  document.querySelector(
    ".numOfFollowers1"
  ).textContent
  let f2=  document.querySelector(
    ".numOfFollowers2"
  ).textContent
  let r2=  document.querySelector(
    ".numOfRepos2"
  ).textContent
  let r1=  document.querySelector(
    ".numOfRepos1"
  ).textContent
 
  let n2=document.querySelector(".comparisonTwoName").textContent;
  let n1=document.querySelector(".comparisonOneName").textContent;
  let p1=document.querySelector(".photo1").src;
  let p2=document.querySelector(".photo2").src;

  if(r1>r2){
  document.querySelector(".winnerName").textContent=n1;
  document.querySelector(".numOfReposW").textContent=r1;
  document.querySelector(".numOfFollowersW").textContent=f1;
  document.querySelector(".photoW").src=p1;
  

  }else  if(r2>r1){
    document.querySelector(".winnerName").textContent=n2;
    document.querySelector(".numOfReposW").textContent=r2;
    document.querySelector(".numOfFollowersW").textContent=f2;
    document.querySelector(".photoW").src=p2;
    }


e.preventDefault;
});
document.querySelector(".logo").addEventListener('click',function(){
  window.open("/index.html" , "_self")
  
  })
  
