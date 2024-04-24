$(document).ready(function() {

  var inputs = [""];
  var totalString;
  var operators = ["+", "-", "/", "*","%"];
  var dot = ["."];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


  function getValue(values) {
    if (dot.includes(inputs[inputs.length-1]===true && values === ".")) {
      console.log("Duplicate '.'");
    } else if (inputs.length === 1 && operators.includes(values)===false){
      inputs.push(values);
    } else if (operators.includes(inputs[inputs.length - 1]) === false){
      inputs.push(values);
    } else if (numbers.includes(Number(values))) {
      inputs.push(values);
    }
    update();
  }

  function update() {
      totalString = inputs.join("");
      $("#inputScreen").html(totalString);
      $("#fullString").html(totalString);
      if (totalString.length > 13) {
        inputs.pop();
        $("#fullString").html("Maximum input length met");
      }
  }

  function getTotal() {
    totalString = inputs.join("");
    $("#inputScreen").html(eval(totalString));
  }

  $(".btn").on("click",function (){
    if (this.id === "clearAll"){
      inputs = [""];
      update ();
    } else if (this.id==="clearOne"){
      inputs.pop();
      update();
    } else if (this.id === "equals"){
      getTotal();
    } else {
      if (inputs[inputs.length-1].indexOf("+","-", "/", "*",".")=== -1){
        getValue(this.id);
      } else {
        getValue(this.id);
      }
    }

  });
});
