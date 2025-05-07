

var contador
	var totalPar=0
    var totalImpar=0

	for(contador =1; contador <=100; contador++){
		if(contador %2==0){
			totalPar = totalPar + contador
			console.log(contador, " ", totalPar, "\n")
		}else{
			totalImpar= totalImpar + contador
			console.log(contador, " ", totalImpar, "\n")
		}
	} console.log("\n")
	console.log("total de numeros pares: ", totalPar, "\n")
	console.log("total de numeros impares: ", totalImpar, "\n")

	if(totalPar > totalImpar){
		console.log("O total de numeros pares é maior")
	}else{
		console.log("O total de numeros impares é maior")
	}