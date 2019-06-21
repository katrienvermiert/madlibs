function addWords() {
  let adjective1 = document.getElementById("adjective1").value;
  let adjective2 = document.getElementById("adjective2").value;
  let plnoun = document.getElementById("plnoun").value;
  let nationality = document.getElementById("nationality").value;
  let person = document.getElementById("person").value;
  let noun1 = document.getElementById("noun1").value;
  let noun2 = document.getElementById("noun2").value;
  let noun3 = document.getElementById("noun3").value;
  let food1 = document.getElementById("food1").value;
  let food2 = document.getElementById("food2").value;
  let shape = document.getElementById("shape").value;
  let number = document.getElementById("number").value;

  if (
    adjective1 == "" ||
    nationality == "" ||
    person == "" ||
    noun1 == "" ||
    adjective2 == "" ||
    noun2 == "" ||
    plnoun == "" ||
    noun3 == "" ||
    number == "" ||
    shape == "" ||
    food1 == "" ||
    food2 == ""
  ) {
    alert("input required");
  } else {
    document.getElementById("input1").value = adjective1;
    document.getElementById("input2").value = nationality;
    document.getElementById("input3").value = person;
    document.getElementById("input4").value = noun1;
    document.getElementById("input5").value = adjective2;
    document.getElementById("input6").value = noun2;
    document.getElementById("input7").value = adjective1;
    document.getElementById("input8").value = adjective2;
    document.getElementById("input9").value = plnoun;
    document.getElementById("input10").value = noun3;
    document.getElementById("input11").value = number;
    document.getElementById("input12").value = shape;
    document.getElementById("input13").value = food1;
    document.getElementById("input14").value = food2;
    document.getElementById("input15").value = number;
  }
}

function reset() {
  adjective1.value = "";
  adjective2.value = "";
  nationality.value = "";
  person.value = "";
  noun1.value = "";
  noun2.value = "";
  noun3.value = "";
  plnoun.value = "";
  food1.value = "";
  food2.value = "";
  number.value = "";
  shape.value = "";
}

function resetText() {
  document.getElementById("input1").value = ""
  document.getElementById("input2").value = ""
  document.getElementById("input3").value = ""
  document.getElementById("input4").value = ""
  document.getElementById("input5").value = ""
  document.getElementById("input6").value = ""
  document.getElementById("input7").value = ""
  document.getElementById("input8").value = ""
  document.getElementById("input9").value = ""
  document.getElementById("input10").value = ""
  document.getElementById("input11").value = ""
  document.getElementById("input12").value = ""
  document.getElementById("input13").value = ""
  document.getElementById("input14").value = ""
  document.getElementById("input15").value = ""
}
