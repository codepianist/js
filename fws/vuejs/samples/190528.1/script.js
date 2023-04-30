window.onload = _ => {
	new Vue({
		el: '#app',
		data: {
			title: 'Hello World!',
			seeMore: `https://www.google.com/ie=UTF-8`,
			code: `<a href="https://www.google.com/search?q=java&oq=java" target="_blank">Java</a>`,
			x: 0,
			y: 0,
			counter: 0
		},
		methods: {
			changeTitle: function(e) {
				this.title = e.target.value; // Nao use arrow functions. 
				// Como as arrow functions são vinculadas ao contexto pai, this não representará a instância Vue como você pode esperar.
				// console.log(`Title changed [target: ${e.target.value}, title: ${this.title}]!`);
				// document.getElementById('result').innerHTML = e.target.value; // alternative
			},
			sayHello: function(){
				return `${this.title} from method!`;
			},
			updateCoordinates: function(e){
				this.x= e.clientX;
				this.y= e.clientY;
				// console.log(`Coordinates updated: ${this.x},${this.y}!`);
			},
			increase(amount){
				this.counter += amount;
			},
			alertMe: function(){
				alert('This is an alert!');
			}
		}
	});
};
