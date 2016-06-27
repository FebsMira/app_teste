App.prototype.HomeScreen = function() {
	var self = this;
	$("#valorcompra").on('keyup', self.HomeCalculateAction.bind(self));
	$("#nparcelas").on('keyup', self.HomeCalculateAction.bind(self));
	$("#avistadesconto").on('keyup', self.HomeCalculateAction.bind(self));
	$("#descontopercentual").on('keyup', self.HomeCalculateAction.bind(self));
	$("#rendimento").on('keyup', self.HomeCalculateAction.bind(self));

	$("#avistadesconto").on('keyup', function(){$("#descontopercentual").val("")});
	$("#descontopercentual").on('keyup', function(){$("#avistadesconto").val("")});

	$("#aplicacao").on('change',function(){$("#rendimento").val($("#aplicacao").val())});
	$("#rendimento").val($("#aplicacao").val());
};

App.prototype.HomeCalculateAction = function(e) {
	e.preventDefault();
	//console.log(e.currentTarget.value);
	var valorcompra=$("#valorcompra").val() || 0;
	var nparcelas=$("#nparcelas").val() || 0;
	var parcela = (valorcompra/nparcelas).toFixed(2);
	var avistadesconto=$("#avistadesconto").val() || 0;
	var desconto=$("#descontopercentual").val() || 0;
	var rendimento=$("#rendimento").val() || 0;
	var totalrendimento=0;
	if(desconto>0){
		var totalcomdesconto=valorcompra*(1-(desconto/100));
	}else{
		var totalcomdesconto=valorcompra;
	}
	var rendimentomensal = rendimento/(100*12);
	for(var i=0; i<nparcelas;i++){
		if(i>0){
			totalrendimento = parseFloat(totalrendimento*(1+rendimentomensal));
		}
		totalrendimento += parseFloat(parcela);
	}
	totalrendimento = totalrendimento.toFixed(2);
	if(valorcompra>0 && nparcelas>0 && (avistadesconto>0 || desconto>0)){
		if(totalrendimento > valorcompra && valorcompra <= totalcomdesconto){
			$("#resultado").html("Compre à prazo");
		}else{
			$("#resultado").html("Compre à vista");
		}
	}else{
		$("#resultado").html("Preencha os campos");
	}
	console.log(totalrendimento);
};
