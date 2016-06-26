App.prototype.HomeScreen = function() {
	var self = this;
	$("#parcela").on('keyup', self.HomeCalculateAction.bind(self));
	$("#nparcelas").on('keyup', self.HomeCalculateAction.bind(self));
	$("#avistadesconto").on('keyup', self.HomeCalculateAction.bind(self));
	$("#descontopercentual").on('keyup', self.HomeCalculateAction.bind(self));
	$("#rendimento").on('keyup', self.HomeCalculateAction.bind(self));

	$("#avistadesconto").on('keyup', function(){$("#descontopercentual").val("")});
	$("#descontopercentual").on('keyup', function(){$("#avistadesconto").val("")});

};

App.prototype.HomeCalculateAction = function(e) {
	e.preventDefault();
	//console.log(e.currentTarget.value);
	var parcela=$("#parcela").val() || 0;
	var nparcelas=$("#nparcelas").val() || 0;
	var avistadesconto=$("#avistadesconto").val() || 0;
	var desconto=$("#descontopercentual").val() || 0;
	var rendimento=$("#rendimento").val() || 0;
	var total=0;
	for(var i=0; i<nparcelas;i++){
		//total = total*(1+(juros/100))+parcela;
		total = parcela*nparcelas;
	}
	total = total.toFixed(2);
	if(parcela>0 && nparcelas>0 && avistadesconto>0 || desconto>0){
		if(avistadesconto < total){
			$("#resultado").html("Compre a vista");
		}else{
			$("#resultado").html("Compre parcelado");
		}
	}else{
		$("#resultado").html("Preencha os campos");
	}
	console.log(total);
};
