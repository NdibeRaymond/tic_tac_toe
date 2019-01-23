
var player1 = null;
var player2 = null;
while((player1 == null)||(player1 =="")){
  player1 = prompt("player1 name:");
  if (player1 == null){
    alert("You must choose a name for player1 to proceed")
  }
}

while((player2 == null)||(player2 =="")){
  player2 = prompt("player2 name:");
  if (player2 == null){
    alert("You must choose a name for player2 to proceed")
  }
}

var turn = player1;
document.querySelector("#whose_turn").textContent = turn+"'s"+" turn";


$("#done").on("click", function(){
  if (turn == player1){
    turn = player2;
  }else{
    turn = player1;
  }
  document.querySelector("#whose_turn").textContent = turn+"'s"+" turn";
    })


function empty_cells(){
  document.querySelector(".r1c1").textContent = "";
  document.querySelector(".r1c2").textContent = "";
  document.querySelector(".r1c3").textContent = "";
  document.querySelector(".r2c1").textContent = "";
  document.querySelector(".r2c2").textContent = "";
  document.querySelector(".r2c3").textContent = "";
  document.querySelector(".r3c1").textContent = "";
  document.querySelector(".r3c2").textContent = "";
  document.querySelector(".r3c3").textContent = "";

}


function check_if_game_over(){
  var r1c1 = document.querySelector(".r1c1").textContent;
  var r1c2 = document.querySelector(".r1c2").textContent;
  var r1c3 = document.querySelector(".r1c3").textContent;
  var r2c1 = document.querySelector(".r2c1").textContent;
  var r2c2 = document.querySelector(".r2c2").textContent;
  var r2c3 = document.querySelector(".r2c3").textContent;
  var r3c1 = document.querySelector(".r3c1").textContent;
  var r3c2 = document.querySelector(".r3c2").textContent;
  var r3c3 = document.querySelector(".r3c3").textContent;

  if ((r1c1 == r1c2)&(r1c2 == r1c3)&(r1c3 != "")){
    alert("Game Over!!!   "+turn+" have won the game")
    turn = player1;
    document.querySelector("#whose_turn").textContent = turn+"'s"+" turn";
    empty_cells();
  }

  else if ((r2c1 == r2c2)&(r2c2 == r2c3)&(r2c3 != "")){
    alert("Game Over!!!   "+turn+" have won the game")
    turn = player1;
    document.querySelector("#whose_turn").textContent = turn+"'s"+" turn";
    empty_cells();
  }

  else if ((r3c1 == r3c2)&(r3c2 == r3c3)&(r3c3 != "")){
    alert("Game Over!!!   "+turn+" have won the game")
    turn = player1;
    document.querySelector("#whose_turn").textContent = turn+"'s"+" turn";
    empty_cells();
  }

  else if ((r1c1 == r2c1)&(r2c1 == r3c1)&(r3c1 != "")){
    alert("Game Over!!!   "+turn+" have won the game")
    turn = player1;
    document.querySelector("#whose_turn").textContent = turn+"'s"+" turn";
    empty_cells();
  }

  else if ((r1c2 == r2c2)&(r2c2 == r3c2)&(r3c2 != "")){
    alert("Game Over!!!   "+turn+" have won the game")
    turn = player1;
    document.querySelector("#whose_turn").textContent = turn+"'s"+" turn";
    empty_cells();
  }

  else if ((r1c3 == r2c3)&(r2c3 == r3c3)&(r3c3 != "")){
    alert("Game Over!!!   "+turn+" have won the game")
    turn = player1;
    document.querySelector("#whose_turn").textContent = turn+"'s"+" turn";
    empty_cells();
  }

  else if ((r1c1 == r2c2)&(r2c2 == r3c3)&(r3c3 != "")){
    alert("Game Over!!!   "+turn+" have won the game")
    turn = player1;
    document.querySelector("#whose_turn").textContent = turn+"'s"+" turn";
    empty_cells();
  }

  else if ((r1c3 == r2c2)&(r2c2 == r3c1)&(r3c1 != "")){
    alert("Game Over!!!   "+turn+" have won the game")
    turn = player1;
    document.querySelector("#whose_turn").textContent = turn+"'s"+" turn";
    empty_cells();
  }
}




$(".r1c1").on("click", function(){
    if(document.querySelector(".r1c1").textContent == "x"){
      document.querySelector(".r1c1").textContent = "o";
    check_if_game_over();}
    else if(document.querySelector(".r1c1").textContent == "o"){
      document.querySelector(".r1c1").textContent = "";
    check_if_game_over();}
    else if(document.querySelector(".r1c1").textContent == ""){
        document.querySelector(".r1c1").textContent = "x";
      check_if_game_over();}
    ;})


$(".r1c2").on("click", function(){
    if(document.querySelector(".r1c2").textContent == "x"){
      document.querySelector(".r1c2").textContent = "o";
    check_if_game_over();}
    else if(document.querySelector(".r1c2").textContent == "o"){
      document.querySelector(".r1c2").textContent = "";
    check_if_game_over();}
    else if(document.querySelector(".r1c2").textContent == ""){
        document.querySelector(".r1c2").textContent = "x";
      check_if_game_over();}
    ;})



$(".r1c3").on("click", function(){
    if(document.querySelector(".r1c3").textContent == "x"){
      document.querySelector(".r1c3").textContent = "o";
    check_if_game_over();}
    else if(document.querySelector(".r1c3").textContent == "o"){
      document.querySelector(".r1c3").textContent = "";
    check_if_game_over();}
    else if(document.querySelector(".r1c3").textContent == ""){
        document.querySelector(".r1c3").textContent = "x";
      check_if_game_over();}
    ;})



$(".r2c1").on("click", function(){
    if(document.querySelector(".r2c1").textContent == "x"){
      document.querySelector(".r2c1").textContent = "o";
    check_if_game_over();}
    else if(document.querySelector(".r2c1").textContent == "o"){
      document.querySelector(".r2c1").textContent = "";
    check_if_game_over();}
    else if(document.querySelector(".r2c1").textContent == ""){
        document.querySelector(".r2c1").textContent = "x";
      check_if_game_over();}
    ;})


$(".r2c2").on("click", function(){
    if(document.querySelector(".r2c2").textContent == "x"){
      document.querySelector(".r2c2").textContent = "o";
    check_if_game_over();}
    else if(document.querySelector(".r2c2").textContent == "o"){
      document.querySelector(".r2c2").textContent = "";
    check_if_game_over();}
    else if(document.querySelector(".r2c2").textContent == ""){
        document.querySelector(".r2c2").textContent = "x";
      check_if_game_over();}
    ;})


$(".r2c3").on("click", function(){
    if(document.querySelector(".r2c3").textContent == "x"){
      document.querySelector(".r2c3").textContent = "o";
    check_if_game_over();}
    else if(document.querySelector(".r2c3").textContent == "o"){
      document.querySelector(".r2c3").textContent = "";
    check_if_game_over();}
    else if(document.querySelector(".r2c3").textContent == ""){
        document.querySelector(".r2c3").textContent = "x";
      check_if_game_over();}
    ;})


$(".r3c1").on("click", function(){
    if(document.querySelector(".r3c1").textContent == "x"){
      document.querySelector(".r3c1").textContent = "o";
    check_if_game_over();}
    else if(document.querySelector(".r3c1").textContent == "o"){
      document.querySelector(".r3c1").textContent = "";
    check_if_game_over();}
    else if(document.querySelector(".r3c1").textContent == ""){
        document.querySelector(".r3c1").textContent = "x";
      check_if_game_over();}
    ;})


$(".r3c2").on("click", function(){
    if(document.querySelector(".r3c2").textContent == "x"){
      document.querySelector(".r3c2").textContent = "o";
    check_if_game_over();}
    else if(document.querySelector(".r3c2").textContent == "o"){
      document.querySelector(".r3c2").textContent = "";
    check_if_game_over();}
    else if(document.querySelector(".r3c2").textContent == ""){
        document.querySelector(".r3c2").textContent = "x";
      check_if_game_over();}
    ;})


$(".r3c3").on("click", function(){
  if(document.querySelector(".r3c3").textContent == "x"){
    document.querySelector(".r3c3").textContent = "o";
  check_if_game_over();}
  else if(document.querySelector(".r3c3").textContent == "o"){
    document.querySelector(".r3c3").textContent = "";
  check_if_game_over();}
  else if(document.querySelector(".r3c3").textContent == ""){
      document.querySelector(".r3c3").textContent = "x";
    check_if_game_over();}
  ;})
