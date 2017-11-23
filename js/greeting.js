(function(){

  let myName = document.getElementById("my-name"); 
  let userName = document.getElementById("user-name"); 
  let getName = document.getElementById("get-name");
  let myNames = document.getElementById("my-names"); 

  function PerformGreeting(ev) {
    myName.innerHTML = userName.value;
    myNames.innerHTML = userName.value;
    ev.preventDefault();

    console.log("name stored");
    }

    function clear()

    {

      myNames.innerHTML = "";
      myName.innerHTML = "anonymous user";

      console.log("Name cleared");
    }


    getName.addEventListener("submit", PerformGreeting);

    getName.addEventListener("reset", clear);

   

  
}());
