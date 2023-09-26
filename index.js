//selection des elements Html
let inputTxt = document.getElementById("inputTxt");
let listcontent = document.getElementById("listcontent");//selection du ul content
let btnAjout = document.getElementById("btnAjout");
let spanButton = '';

btnAjout.addEventListener('click', function ajout(e){
    e.defaultPrevented

    if(inputTxt.value === ''){
        message.innerHTML = alert('remplissez tout le champs')
    }

    else{
        let li = document.createElement('li')
        listcontent.appendChild(li)
        li.innerHTML = inputTxt.value
        spanButton = document.createElement('span');
        spanButton.innerHTML = "\ud83d\uddd1";
        spanButton.setAttribute("id", "spanBtn")
        const checkBx = document.createElement("input");
        checkBx.setAttribute("type", "checkbox");
        li.prepend(checkBx);
        li.appendChild(spanButton);
    }
    inputTxt.value = ''

})

listcontent.addEventListener("click", (e)=>{
    if (e.target.tagName === 'SPAN') {
        // Sélectionnez l'élément <li> parent correspondant
        const listItem = e.target.parentElement;
        
        // Supprimez l'élément <li> du DOM
        listItem.remove();
    }
 }) 