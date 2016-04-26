window.onload = function(){
	var prve = document.getElementById("prve");
	var next = document.getElementById("next");
	var list = document.getElementById("list");
	var nav00 = document.getElementById("nav00");
	var span = nav00.getElementsByTagName("span");
	var aLi = list.getElementsByTagName("li");
	var n = 0;

	for(var i=0;i<span.length;i++){
		span[i].index = i;
		span[i].onclick = function (){
			for(var j=0;j<span.length;j++){
				span[j].className = "";
				aLi[j].style.display = "none";	
			};
			this.className = "active";
			aLi[this.index].style.display = "block";
			n = this.index;
		};
	};
	
	next.onclick = function(){
		n++;
		for (var i=0;i<aLi.length;i++) {
			aLi[i].style.display = "none";
			span[i].className = "";
		};
		if(n>=aLi.length){
			n = 0;
		};
		aLi[n].style.display = "block";
		span[n].className = "active";
	};
	prve.onclick = function(){
		n--;
		for (var i=0;i<aLi.length;i++) {
			aLi[i].style.display = "none";
			span[i].className = "";
		};
		if(n<0){
			n = aLi.length-1;
		};
		aLi[n].style.display = "block";
		span[n].className = "active";	
	};	
};
