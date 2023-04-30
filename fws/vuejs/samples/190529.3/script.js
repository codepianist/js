window.onload= _ => {
	new Vue({
		el: "#app",
		data: {
			square: 'square',
			colors: ['gray','red','blue','green'],
			first: 0,
			second: 0,
			third: 0
		},
		computed: {
			first_color: function(){
				console.log(`first: ${this.first} ${this.colors[this.first]}`);
				if(this.first > 3) 
					this.first= 0;
				return this.colors[this.first];
			},
			second_color: function(){
				console.log(`second: ${this.second}`);
				if(this.second > 3) 
					this.second= 0;
				return this.colors[this.second];
			},
			third_color: function(){
				console.log(`third: ${this.third}`);
				if(this.third > 3) 
					this.third= 0;
				return this.colors[this.third];
			}
		}
	});
};