var tabs = document.querySelectorAll(".tabs ul li");
var tab_wraps = document.querySelectorAll(".tab_wrap");

tabs.forEach(function(tab, tab_index){
	tab.addEventListener("click", function(){
		tabs.forEach(function(tab){
			tab.classList.remove("active_tab");
		})
		tab.classList.add("active_tab");

		tab_wraps.forEach(function(content, content_index){
			if(content_index == tab_index){
				content.style.display = "block";
			}
			else{
				content.style.display = "none";
			}
		})

	})
})

function myFunction(){
	var element = document.getElementById("nav-wrap");
	var navtoggler = document.getElementById("nav-toggler");
	var mynav = document.getElementById("mynav");

	
	element.classList.toggle("nav-wrap-toggle");
	navtoggler.classList.toggle("nav-toggler");
	mynav.classList.toggle("nav-bg-color");
 }
 
