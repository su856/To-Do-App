(function (){
let inputbutton = document.querySelector('#input');
inputbutton.onkeyup = function (e) 
{
    if (e.keyCode == 13){
        if(inputbutton.value)
        {
           addItem(inputbutton);
        }
    }
};
})();

function addItem(inputbutton)
{
    let ul = document.querySelector('#list');
    let li = document.createElement('li');
    let textnode = document.createTextNode(inputbutton.value);
    li.appendChild(textnode);
    ul.appendChild(li);
    inputbutton.value="";
    li.onclick=function(e){
        e.target.remove();
    }
}