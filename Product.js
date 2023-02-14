let dropDownList = document.getElementById("Selectitems");
console.log({ dropDownList });
let getPost = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
};



let displayOption = async () => {
  let options = await getPost();
  for (option of options) {
    let newOption = document.createElement("option");
    let image = option.image
    let category = option.category
    let price = option.price
    newOption.value = "<img src='"+image+"'>" + "<h5>Category: "+category+"</h5>" + "<h5>Price: "+price+"</h5>"
    newOption.text = option.id;
    dropDownList.appendChild(newOption);
  }
};


displayOption()


let selVal = (ele) => {

    let divDisplay = document.getElementById("dropdown")
    divDisplay.remove
    divDisplay.setAttribute("class", "item")
    divDisplay.innerHTML = ele.value
    // alert('The selected value: ' + ele.value);
    
}



