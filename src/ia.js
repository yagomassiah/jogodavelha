
function checaVitoria(board) {
    let i = 0;

    if (board[i] == "O" && board[i + 1] == "O" && board[i + 2] == "O")
        return true;
    i = 3;
    if (board[i] == "O" && board[i + 1] == "O" && board[i + 2] == "O")
        return true;
    i = 6;
    if (board[i] == "O" && board[i + 1] == "O" && board[i + 2] == "O")
        return true;

    i = 0;
    if (board[i] == "O" && board[i + 3] == "O" && board[i + 6] == "O")
        return true;
    i = 1;
    if (board[i] == "O" && board[i + 3] == "O" && board[i + 6] == "O")
        return true;
    i = 2;
    if (board[i] == "O" && board[i + 3] == "O" && board[i + 6] == "O")
        return true;


    if (board[0] == "O" && board[4] == "O" && board[8] == "O")
        return true;


    if (board[2] == "O" && board[4] == "O" && board[6] == "O")
        return true;

    return false;

}
function possibilidadesVitoria(board) {
    let count = 0;
    if (checaVitoria(board))
        return 1;
    else if (!jogadasP(board))
        return count;
    else {
        let jogadas = jogadasP(board);
        //console.log(jogadas.length);
        jogadas.forEach(element => {
            //checaVitoria(element);
            count += possibilidadesVitoria(element);
        });
    }
    return count;
}
function jogadasP(board) {
    const jogadasPossiveis = [];
    //const boardx = board.slice();
    for (let i = 0; i < board.length; i++) {

        if (!board[i]) {
            let novaJogada = board.slice();
            novaJogada[i] = "O";
            jogadasPossiveis.push(novaJogada);
        }

    }

    return jogadasPossiveis;

}
function calculaPossibilidades(board) {
    let i = 0;
    let count = 0;
    if (board[i] == "O" || board[i + 1] == "O" || board[i + 2] == "O") {
        if ((board[i] == "O" || board[i] == null) && (board[i + 1] == "O" || board[i + 1] == null) && (board[i + 2] == "O" || board[i + 2] == null))
            count++;
    }
    i = 3;
    if (board[i] == "O" || board[i + 1] == "O" || board[i + 2] == "O") {
        if ((board[i] == "O" || board[i] == null) && (board[i + 1] == "O" || board[i + 1] == null) && (board[i + 2] == "O" || board[i + 2] == null))
            count++;
    }
    i = 6;
    if (board[i] == "O" || board[i + 1] == "O" || board[i + 2] == "O") {
        if ((board[i] == "O" || board[i] == null) && (board[i + 1] == "O" || board[i + 1] == null) && (board[i + 2] == "O" || board[i + 2] == null))
            count++;
    }
    i = 0;

    if (board[i] == "O" || board[i + 3] == "O" || board[i + 6] == "O") {
        if ((board[i] == "O" || board[i] == null) && (board[i + 3] == "O" || board[i + 3] == null) && (board[i + 6] == "O" || board[i + 6] == null))
            count++;
    }
    i = 1;
    if (board[i] == "O" || board[i + 3] == "O" || board[i + 6] == "O") {
        if ((board[i] == "O" || board[i] == null) && (board[i + 3] == "O" || board[i + 3] == null) && (board[i + 6] == "O" || board[i + 6] == null))
            count++;
    }
    i = 2;

    if (board[i] == "O" || board[i + 3] == "O" || board[i + 6] == "O") {
        if ((board[i] == "O" || board[i] == null) && (board[i + 3] == "O" || board[i + 3] == null) && (board[i + 6] == "O" || board[i + 6] == null))
            count++;
    }

    if (board[0] == "O" || board[4] == "O" || board[8] == "O") {
        if ((board[0] == "O" || board[0] == null) && (board[4] == "O" || board[4] == null) && (board[8] == "O" || board[8] == null))
            count++;
    }

    if (board[2] == "O" || board[4] == "O" || board[6] == "O") {
        if ((board[2] == "O" || board[2] == null) && (board[4] == "O" || board[4] == null) && (board[6] == "O" || board[6] == null))
            count++;
    }

    return count;
}
function melhoresJ(jogadasPossiveis) {

    let melhoresJogadas = [];
    let maxPossibilidades = 0;

    jogadasPossiveis.forEach(element => {
        if (checaVitoria(element)) {
            maxPossibilidades = 100000;
            melhoresJogadas = [];
            melhoresJogadas.push({
                valor: 100000,
                board: element
            });
        }
    });

    if (maxPossibilidades < 100000) {
        jogadasPossiveis.forEach(element => {
            let possibilidades = calculaPossibilidades(element);
            console.log(possibilidades);
            if (possibilidades > maxPossibilidades) {
                melhoresJogadas = [];
                maxPossibilidades = possibilidades;
                melhoresJogadas.push({
                    valor: possibilidades,
                    board: element
                });
            } else if (possibilidades == maxPossibilidades) {
                maxPossibilidades = possibilidades;
                console.log("Possibilidades: " + possibilidades);
                console.log("Max Possibilidades: " + maxPossibilidades);
                melhoresJogadas.push({
                    valor: possibilidades,
                    board: element
                });
            }
        });
    }
    melhoresJogadas.sort(function (a, b) {
        return a.valor - b.valor
    });
    console.log(melhoresJogadas);
    return melhoresJogadas;

}
export function iaMove(squares, index) {
    var newSquares = squares.slice();
    const jogadasPossiveis = jogadasP(newSquares);
    //console.log(jogadasPossiveis);

    //  let number = Math.round(Math.random() * (jogadasPossiveis.length - 1))
    // const jogadaSelecionada = jogadasPossiveis[number];
    const melhoresJogadas = melhoresJ(jogadasPossiveis);
    const jogadaSelecionada = melhoresJogadas[0].board;
    console.log(checaVitoria(jogadaSelecionada));
    if (checaVitoria(jogadaSelecionada))
        console.log(jogadaSelecionada);
    return jogadaSelecionada;

}