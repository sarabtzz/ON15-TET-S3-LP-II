let clienteLilit = [
    {produto: 'Bolsa pequena', valor: 49.0}, 
    {produto: 'Cinto preto', valor: 22.0}, 
    {produto: 'Jaqueta Jeans', valor: 300.0}, 
    {produto: 'Calça preta', valor: 100.0}, 
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Calça jeans clara', valor: 130.0}, 
    {produto: 'Blusa preta gola alta', valor: 60.0}, 
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Salto agulha 39', valor: 250.0}, 
    {produto: 'Tênis casual preto', valor: 120.0}, 
    {produto: 'meia calça transparente', valor: 30.0}]

let clienteMaria = [ 
    {produto: 'Camiseta azul simples', valor: 45.0}, 
    {produto: 'Tênis preto de corrida 38', valor: 150.0}, 
    {produto: 'Conjunto de Meias brancas', valor: 25.0}, 
    {produto: 'Shorts de corrida preto ', valor: 30.0}, 
    {produto: 'Top preto M', valor: 20.0}, 
    {produto: 'Corta vento básico', valor: 110.0}]

let clienteCelina = [
    {produto: 'Vestido longo vermelho G', valor: 150.0}, 
    {produto: 'Camiseta preta básica BL G', valor: 50.0}, 
    {produto: 'Sandália tipo birken 37', valor: 120.0}, 
    {produto: 'Bolsa de couro marrom tam pequeno', valor: 110.0}]




function FaturarComprar(arrayDeCompra) {
    let valorTotal = 0 
    let descontoAplicado = 0
    let valorComDesconto = 0
    let quantidadeDeProdutos = arrayDeCompra.length 

    for(let itemDaCompra of arrayDeCompra){
        valorTotal += itemDaCompra.valor
        if (itemDaCompra.valor >= 200.0) {
            valorComDesconto += (itemDaCompra.valor * 0.5)
            descontoAplicado += (itemDaCompra.valor * 0.5)
        } else if (itemDaCompra.valor >= 100.0) {
            valorComDesconto += (itemDaCompra.valor * 0.8)
            descontoAplicado += (itemDaCompra.valor * 0.2)
        } else if (itemDaCompra.valor >= 80.0) {
            valorComDesconto += (itemDaCompra.valor * 0.9)
            descontoAplicado += (itemDaCompra.valor * 0.1)
        } else if (itemDaCompra.valor >= 50.0) {
            valorComDesconto += (itemDaCompra.valor * 0.95)
            descontoAplicado += (itemDaCompra.valor * 0.05)
        } else {
            valorComDesconto += itemDaCompra.valor
        }
    }

    let dataDaCompra = new Date ()

    let retornoParaCliente = {
        "Valor Total": `R$${valorTotal.toFixed(2).replace('.',',')}`,
        "Desconto Aplicado": `R$${descontoAplicado.toFixed(2).replace('.',',')}`,
        "Valor Final": `R$${valorComDesconto.toFixed(2).replace('.',',')}`,
        "Data da Comppa": dataDaCompra.toLocaleDateString("pt-BR"),
    }

    if (quantidadeDeProdutos > 10 || valorComDesconto > 800.0) {
        return console.log({
            ...retornoParaCliente,
            "Bônus": 'Cupom de R$50,00 para sua próxima compra'
        })
    } else {
        return console.log(retornoParaCliente)
    }
}

FaturarComprar(clienteMaria)