$("ul").on("click", ".text", function(){
	
	//if li is gray trun it into black else trun it into gray  ?* add and remove .completed class
    $(this).toggleClass("completed");

});

//selected X to delete todos
$("ul").on("click", ".icon", function(event){
	$(this).parent().fadeOut(500,function(){	
		$(this).remove();
	});
	event.stopPropagation();  //for stop event bubbling
});

//adding a new todos
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todotext = $(this).val();
		$("ul").append("<li><span class='icon'><i class='far fa-trash-alt'></i></span><span class='text'> " + todotext + "</span></li>");
	}
});


$("h1").on("click", ".plus", function(){
	$("input[type='text']").fadeToggle();
});
