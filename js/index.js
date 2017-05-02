var index=1;
function btn_left(){
	if(index==1){
		index=3;
	}else{
		index--;
	}
	
	//document.write(i);
	document.getElementById("banner_img").src="./img/banner"+index+".jpg";
}
function btn_right(){
	if(index==3){
		index=1;
	}else{
		index++;
	}
	//document.write(i);
	document.getElementById("banner_img").src="./img/banner"+index+".jpg";
}
function btn_one(){
	document.getElementById("banner_img").src="./img/banner"+1+".jpg";
	//document.getElementById("li_one").backgroundColor=blue;
}
function btn_two(){
	document.getElementById("banner_img").src="./img/banner"+2+".jpg";
	//document.getElementById("li_two").backgroundColor=blue;
}
function btn_three(){
	document.getElementById("banner_img").src="./img/banner"+3+".jpg";
	//document.getElementById("li_three").backgroundColor=blue;
}
function btn_move1(){
	document.getElementById("li_one").style.backgroundColor="blue";
	document.getElementById("banner_img").src="./img/banner"+1+".jpg";
}
function btn_move2(){
	document.getElementById("li_two").style.backgroundColor="blue";
	document.getElementById("banner_img").src="./img/banner"+2+".jpg";
}
function btn_move3(){
	document.getElementById("li_three").style.backgroundColor="blue";
	document.getElementById("banner_img").src="./img/banner"+3+".jpg";
}
function btn_over1(){
	document.getElementById("li_one").style.backgroundColor="lightgrey";
}
function btn_over2(){
	document.getElementById("li_two").style.backgroundColor="lightgrey";
}
function btn_over3(){
	document.getElementById("li_three").style.backgroundColor="lightgrey";
}
function btn_link(){
	document.getElementById("btm_link").style.display="block";
}
function btn_linkout(){
	document.getElementById("btm_link").style.display="none";
}
function xli_click(){
	$(".news_c_left .right ul").animate({"margin-top":0});
	document.getElementById("btn_xinwen").style.width="160px";
	document.getElementById("btn_dongtai").style.width="150px";
}
function dli_click(){
	$(".news_c_left .right ul").animate({"margin-top":-338});
	document.getElementById("btn_xinwen").style.width="150px";
	document.getElementById("btn_dongtai").style.width="160px";
}
/*function xli_move(){
	document.getElementById("btn_xinwen").style.width="160px";
}
function xli_leave(){
	document.getElementById("btn_xinwen").style.width="150px";
}
function dli_move(){
	document.getElementById("btn_dongtai").style.width="160px";
}
function dli_leave(){
	document.getElementById("btn_dongtai").style.width="150px";
}*/
