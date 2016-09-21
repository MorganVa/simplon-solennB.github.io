var selection ;

function hideshow(sel) {
  selection = document.getElementsByClassName("hiddencontent")[sel] ;
  console.log(selection.style.height);
  if (selection.style.height == "0px" || selection.style.height == "") {
  selection.style.height = "100%" ;
}
else {
  selection.style.height = "0" ;
}
}
