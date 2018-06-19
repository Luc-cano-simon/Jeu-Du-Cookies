var i = 0;
var multi = 1;


$("#button").click(function()
{

	i = i+1*multi; 
	$("#Score").html(i); 
});

$("#multiply").click(function()
{
	
	if(i >= 50){
		multi = multi + 1;
		i = i - 50;

		

	}else{
		alert("point insuffisant")
	}
	
	$("#Score").html(i); 

}


)