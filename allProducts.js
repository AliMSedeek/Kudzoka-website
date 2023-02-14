window.addEventListener("load",  getProducts() )

var  divContainer=document.getElementById("container")
function getProducts(){
var xhr= new XMLHttpRequest()
xhr.open("get" ,"https://fakestoreapi.com/products/")

xhr.addEventListener ("readystatechange", function (){
    if(xhr.readyState==4 && xhr.status==200){   
        var resdatajson = xhr.response        
        var resdata = JSON.parse(resdatajson)
        display(resdata)
        
    }
})
xhr.send()
}
function display(resdata){
    for(var i=0  ; i< resdata.length ; i++)
    {
        let category = resdata[i].category
        let price = resdata[i].price
        let image = resdata[i].image
        console.log(image)
        
        var divpro = document.createElement("div")
        divpro.innerHTML+= "<img src='"+image+"'>" + "<br>" + "<h6 class='price' >Category: </h6> " + category +"<br>" + "<h6 class='price' >price: </h6> " + price
        divpro.setAttribute("class", "item")
        divContainer.append(divpro)
     
    }

}