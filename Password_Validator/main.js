function Validate(){
  console.log("Yes");
  let x = document.getElementById("x").value;
  let y = document.getElementById("y").value;

    if(x === y && (x.length > 7 && y.length > 7)){
      alert("Password is valid");
    }
    else if(x.length < 8 && y.length < 8){
      alert("Password needs to be at least 8 characters long");
    }
    else{
      alert("Password is not valid");
    }

}
