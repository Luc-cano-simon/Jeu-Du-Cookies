var i = 0;
var multi = 1;
var price = 50;


$("#button").click(function()
	{

	i = i+1*multi; 
	$("#Score").html(i); 
	});

$("#multiply").click(function()
{
	
	if(i >= price){
		multi = multi + 1;
		i = i - price;
		price=price *2;

		$("#multiply").html("multiplicateur " + multi + "  prochain prix " +price);
	}else{
		alert("point insuffisant")
	}
	
	$("#Score").html(i);


}

)

	$("#Autoclicker").click(function()
{
	if(i >= 500)
	{

		i = i -500;

	
	$("Score").html(i);

	setInterval(function()

		{
        i = i+1*multi; 
		$("#Score").html(i);
        }, 1000);
	
	}else{

		alert("Il te faut plus de crédit ")
	}
});



