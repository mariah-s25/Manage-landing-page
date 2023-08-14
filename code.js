function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function display(person){
  if(person === "anisha"){
    document.getElementById("avatar").src="images/avatar-anisha.png";
    document.getElementById("name").innerHTML = "Anisha Li";
    document.getElementById("saying").innerHTML ='“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”';
    document.getElementById("anisha").className = "active";
    document.getElementById("ali").className = "";
    document.getElementById("richard").className = "";
    document.getElementById("shanai").className = "";
  }
  else if(person === "ali"){
    document.getElementById("avatar").src="images/avatar-ali.png";
    document.getElementById("name").innerHTML = "Ali Bravo";
    document.getElementById("saying").innerHTML ='“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”';
    document.getElementById("anisha").className = "";
    document.getElementById("ali").className = "active";
    document.getElementById("richard").className = "";
    document.getElementById("shanai").className = "";
  }
  else if(person === "richard"){
    document.getElementById("avatar").src="images/avatar-richard.png";
    document.getElementById("name").innerHTML = "Richard Watts";
    document.getElementById("saying").innerHTML ='“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”';
    document.getElementById("anisha").className = "";
    document.getElementById("ali").className = "";
    document.getElementById("richard").className = "active";
    document.getElementById("shanai").className = "";
  }
  else if(person === "shanai"){
    document.getElementById("avatar").src="images/avatar-shanai.png";
    document.getElementById("name").innerHTML = "Shanai Gough";
    document.getElementById("saying").innerHTML ='“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”';
    document.getElementById("anisha").className = "";
    document.getElementById("ali").className = "";
    document.getElementById("richard").className = "";
    document.getElementById("shanai").className = "active";
  }
}