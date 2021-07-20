const showField = (field) => {
    let fieldView = '';
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (i === 1 && j === 1 || i === 2 && j === 1 || i === 0 && j === 1) {
                fieldView += '|' + field[i][j] + '|'
            } else {
                fieldView += ' ' + field[i][j];
            }
        }
        if (i !== 2) {
            fieldView += '\n_______\n'
        }
    }
    console.log(fieldView)
}

const checkConditionGame = (field, symbol) => {
    if (field[0].includes(' ') === false && field[1].includes(' ') === false && field[2].includes(' ') === false) {
        console.log('DRAW!')
        endGame();
    }
    return !(field[0][0] === symbol && field[1][0] === symbol && field[2][0] === symbol ||
        field[0][1] === symbol && field[1][1] === symbol && field[2][1] === symbol ||
        field[0][2] === symbol && field[1][2] === symbol && field[2][2] === symbol ||
        field[0][0] === symbol && field[0][1] === symbol && field[0][2] === symbol ||
        field[1][0] === symbol && field[1][1] === symbol && field[1][2] === symbol ||
        field[2][0] === symbol && field[2][1] === symbol && field[2][2] === symbol ||
        field[0][0] === symbol && field[1][1] === symbol && field[2][2] === symbol ||
        field[0][2] === symbol && field[1][1] === symbol && field[2][0] === symbol);
}

const playerTurn = (field) => {
    const pos = prompt('Enter position: x, y')
    const position = pos.split(' ');
    const y = position[0] - 1;
    const x = position[1] - 1;
    if (field[x][y] === ' ') {
        field[x][y] = 'x';
        console.clear();
        showField(field);
        if (checkConditionGame(field, 'x')) {
            enemyTurn(field);
        } else {
            console.log('WINER: x');
            endGame();
        }
    } else {
        playerTurn(field);
    }
}

const endGame = () => {
    const again = prompt('Play again? Press Y/y')
    if (again === 'y' || again === 'Y') {
        main();
    }
}

const enemyTurn = (field) => {

    let isTurnEnd = true;
    while (isTurnEnd) {
        const x = Math.floor(Math.random() * 3);
        const y = Math.floor(Math.random() * 3)
        if (field[x][y] === ' ') {
            isTurnEnd = false;
            field[x][y] = 'o'
            console.clear();
            showField(field);

            if (checkConditionGame(field, 'o')) {
                playerTurn(field)
            } else {
                console.log('WINER: o');
                endGame();
            }
        }
    }
}

const main = () => {
    console.clear();
    let field = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ];
    showField(field);
    playerTurn(field)
}

main()
