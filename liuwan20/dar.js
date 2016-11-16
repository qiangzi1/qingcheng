	var outer=document.getElementById('outer');
var con_con=document.getElementById('con_con');
var con_con_2=document.getElementById('con_con_2');
var con_con1=document.getElementById('con_con1');
var con_con2=document.getElementById('con_con2');
var con_con3=document.getElementById('con_con3');
var con_con4=document.getElementById('con_con4');
var btnz=document.getElementById('btnz');
var btny=document.getElementById('btny');
var gl=document.getElementById('gl');
var li=gl.getElementsByTagName('li')[0];
for (var i = 0; i < 5; i++) {
	var newli=document.createElement('li');
	newli.innerHTML=li.innerHTML;
	newli.setAttribute('id','con_foot_z0')
	gl.appendChild(newli);
};
con_con_2.innerHTML=con_con.innerHTML;

var time1=null,time2=null,time3=null,time4=null;
bj=0;
 function moveLeft() {
 	time1=setInterval(function () {
 		outer.scrollLeft++;
 		if (outer.scrollLeft>=con_con.offsetWidth) {
 			outer.scrollLeft=0;
 		};
 		if (outer.scrollLeft%(con_con1.offsetWidth+30)==0) {
 			clearInterval(time1);
 			clearTimeout(time2);
 	
 		time2=setTimeout(function () {
 			moveLeft();
 		},2000)
 	   };
 	},2)
 	bj=0;
 }
 moveLeft();
 function moveRight () {
		time3=setInterval(function  () {
			outer.scrollLeft--;
			if (outer.scrollLeft<=0) {
				outer.scrollLeft=con_con.offsetWidth;
			};
			if (outer.scrollLeft%(con_con1.offsetWidth+30)==0) {
				clearInterval(time3);
				clearTimeout(time4);
				time4=setTimeout(function  () {
					moveRight();
				},2000)
			};
		},2)
		bj=1;
	}
	function clear() {
		clearInterval(time1);
		clearInterval(time3);
		clearTimeout(time2);
		clearTimeout(time4);
	}
	outer.onmouseover=function () {
		clear();
	}
	outer.onmouseout=function () {
		if (bj==0) {
			moveLeft();
		}else{
			moveRight ();
		}	
	}
	btnz.onclick=function () {
		clear();
		moveLeft();
	}
	btny.onclick=function () {
		clear();
		moveRight();
	}
