

const run = () => setTimeout( () => {

let links = document.querySelectorAll("a");
for(let i = 0; i < links.length; i++){
	let current = links[i]
	if(current.href.includes("aHR")){
	
	let newElem = document.createElement('span');
	newElem.innerHTML = current.innerHTML;
	newElem.setAttribute("style", "margin:10px;color:blue;font-weight:bold;cursor:pointer;")
	newElem.setAttribute("onmouseover", "this.style.textDecoration='underline';")
	newElem.setAttribute("onmouseout", "this.style.textDecoration='none';")
	
	let url = atob(current.href
		.split("=")
		.filter( el => el.includes("aHR")))
	newElem.setAttribute("onClick", `javascript:window.open('${url}'); return false;`)
	current.parentNode.replaceChild(newElem, current);
	}
}

console.clear()
console.log("%cSemua link disuntik!","color: yellow; font-family:sans-serif; font-size: 20px")
}, 5000)


document.addEventListener('DOMContentLoaded', run)
