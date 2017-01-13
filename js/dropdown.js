$(document).ready(function(){
	/*alert("ready");*/
	var currencyNameItemList = $('#checklist a');
	console.log(currencyNameItemList);
	
	//iterte through list of currency items
	for(var i = 0; i < currencyNameItemList.length; i++){
		//alert("in for loop")
		currencyNameItemList[i].addEventListener("click",selectOption);
	}
	
	/*$("body").click(function () {
		alert("Hello!");
	});
	*/
	/*($(".dropdown-menu-item a").click(function(){
	alert("here");
	});
	*/
	

	
	function selectOption(){
		alert("here");
		
		//selected option
		var selectedCurrencyNameItem = $(this); //selected currency in dropdown
		console.log(this);
		var selectedCurrencyId  = selectedCurrencyNameItem.attr('id'); //its id
		var selectedCurrencyName = selectedCurrencyNameItem.find('.currencyName').text(); //the text
		//classname		
		
		alert("id is " + selectedCurrencyId);
		alert(selectedCurrencyName);
		//send container
		var sendContainerCurrencyName = $('#currencySendType #currencySendContainer .currencyName');  //currency name
		
		//receive container
		var receiveContainerCurrencyName = $('#currencyReceiveType #currencyReceiveContainer .currencyName');  //currency name
		console.log(receiveContainerCurrencyName);
		alert("current currency is" + receiveContainerCurrencyName.text());
		
		switch(selectedCurrencyId){
			
			//send type
			case "america":
				//do stuff
				//change the currency name to the selected one
				sendContainerCurrencyName.text(selectedCurrencyName);
				break;
				
						//send type
			case "kenya" : case "nigeria" : case uganda :
				//do stuff
				//change the currency name to the selected one
				receiveContainerCurrencyName.text(selectedCurrencyName);
				//get all current class
				break;
		}
		
	}
	


});

	
