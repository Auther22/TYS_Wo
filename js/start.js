
window.onload=function(id){
	
    var pics=new Array();
	var banner=document.getElementById('start');
	var sum=0
	let html=''
	
	//加一个自定义
	
    for(var i=1;i<=27;i++){
	
		html += `
			<div class="box" onclick=go(`+i+`)>
				<div class="img" ><img src=`+`../img/`+i+`.png alt="" /></div>
		    </div>
		  `;
		banner.innerHTML = html;

    }
	banner.innerHTML = html;
	
	
}

	