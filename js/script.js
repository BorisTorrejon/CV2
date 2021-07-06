//lee las teclas presionadas
var body= document.querySelector("#body")
var dialogo=document.querySelector("main")
function changeColor(key){
//cambia el color cuando presiono la tecla right
	if(key=="39"){
		body.style.backgroundColor="white"
		dialogo.style.backgroundColor="white"
		dialogo.style.color="black"
	}
	if(key=="37"){
		body.style.backgroundColor="#2a2a2e"
		dialogo.style.backgroundColor="#38383d"
		dialogo.style.color="#26b774"
	}
}
//cambia el contenido del parrafo
function message(key){
	console.log(cont);
	var m="";
	if(key=="37"){
		if (cont==0){
			cont=3;
		}else{
			cont--;
		}
	}
	if(key=="39"){
		if (cont==3){
			cont=0;
		}else{
			cont=cont+1;
		}
	}
	switch(cont){
		case 0:
			 m=`<h1>Mi nombre es Boris</h1>
			 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint minima recusandae omnis inventore, possimus quibusdam dolores, vero beatae voluptatem magni debitis cum dignissimos tempora deserunt quas perspiciatis, numquam molestiae iusto.</p>`;
			break;
		case 1:
			m= `<h1>Estudie</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint minima recusandae omnis inventore, possimus quibusdam dolores, vero beatae voluptatem magni debitis cum dignissimos tempora deserunt quas perspiciatis, numquam molestiae iusto.</p>`;
			break;
		case 2:
			m= `<h1>Habilidades</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint minima recusandae omnis inventore, possimus quibusdam dolores, vero beatae voluptatem magni debitis cum dignissimos tempora deserunt quas perspiciatis, numquam molestiae iusto.</p>`;
			break;
		case 3:
			m= `<h1>Trabajos</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint minima recusandae omnis inventore, possimus quibusdam dolores, vero beatae voluptatem magni debitis cum dignissimos tempora deserunt quas perspiciatis, numquam molestiae iusto.</p>`;
			break;
	}
	return m;
}
function saludo(){
	console.log("hola cabrones")
}
let cont=0;
console.log(dialogo);
dialogo.innerHTML=message();
body.addEventListener("keyup",(event)=>{
	console.log(dialogo);
	dialogo.innerHTML=message(event.keyCode);
})