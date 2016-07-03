App.prototype.HomeScreen = function() {
	var self = this;
	$("#soma").on('click', self.setOperadorSoma.bind(self));
	$("#subtracao").on('click', self.setOperadorSubtracao.bind(self));
	$("#multiplicacao").on('click', self.setOperadorMultiplicacao.bind(self));
	$("#divisao").on('click', self.setOperadorDivisao.bind(self));
};

App.prototype.setOperadorSoma = function(e){
    var self = this;
    var valor1 = $("#display1").val() || 0;
    var valor2 = $("#display2").val() || 0;
    self.resultado = parseFloat(valor1.replace(",", ".")) + parseFloat(valor2.replace(",", "."));
    self.HomeCalculateAction(e);
}

App.prototype.setOperadorSubtracao = function(e){
    var self = this;
    var valor1 = $("#display1").val() || 0;
    var valor2 = $("#display2").val() || 0;
    self.resultado = parseFloat(valor1.replace(",", ".")) - parseFloat(valor2.replace(",", "."));
    self.HomeCalculateAction(e);
}

App.prototype.setOperadorMultiplicacao = function(e){
    var self = this;
    var valor1 = $("#display1").val() || 0;
    var valor2 = $("#display2").val() || 0;
    self.resultado = parseFloat(valor1.replace(",", ".")) * parseFloat(valor2.replace(",", "."));
    self.HomeCalculateAction(e);
}

App.prototype.setOperadorDivisao = function(e){
    var self = this;
    var valor1 = $("#display1").val() || 0;
    var valor2 = $("#display2").val() || 0;
    if(valor2 == 0){
        alert("O segundo valor não pode ser zero!");
    }else{

        self.resultado = parseFloat(valor1.replace(",", ".")) / parseFloat(valor2.replace(",", "."));
        self.HomeCalculateAction(e);
    }

}

App.prototype.HomeCalculateAction = function(e) {
    var self = this;
    $("#display3").val(self.resultado.toFixed(2));
};
