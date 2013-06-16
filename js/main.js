var parseIn = function(data){
	console.log(data);

};

$(document).ready(function(){

	var rbform = $('#recordform'),	// calling form
		FEerror = $('#formerrorlink'); // calling error dialog 
	
	rbform.validate({
		invalidHandler: function(form, validator){
			FEerror.click(); // taget error anchor tag
			//console.log(validator.submitted);
			
			var html = "";
			
			
			for(var key in validator.submitted){  //Looping through keys
				var label = $('label[for^="'+ key +'"]'); // finding label thats start with 'for'
				//console.log(label.text());
				var legend = label.closest('fieldset').find('.ui-controlgroup-label').not(); // getting radios
				var fieldName = legend.length ? legend.text() :label.text();
				//console.log(fieldName);
				
				
				html += '<li>' + fieldName + '</li>'; //Strings added to dialog by targeting
			};
			$('#formErrors ul').html(html);
		
		},
		
		submitHandler: function(){
			var data = rbform.serializeArray();
			parseIn(data);
		
		
		
		}
		
	});



});


