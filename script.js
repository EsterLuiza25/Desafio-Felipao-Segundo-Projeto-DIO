function nivelPartidas(vitorias) {
    
    if (vitorias < 10) {
        return "Ferro";
    } else if (vitorias <= 20) {
        return "Bronze";
    } else if (vitorias <= 50) {
        return "Prata";
    } else if (vitorias <= 80) {
        return "Ouro";
    } else if (vitorias <= 90) {
        return "Diamante";
    } else if (vitorias <= 100) {
        return "Lendário";
    } else {
        return "Imortal";  
    }
}

function nivelRanqueadas(vitorias, derrotas) {
   
    let saldo = vitorias - derrotas;
    let nivel = nivelPartidas(vitorias);
   
    return `O Herói tem um saldo de ${saldo} vitórias e está no nível ${nivel}!`;
}

console.log(nivelRanqueadas(85, 30));
