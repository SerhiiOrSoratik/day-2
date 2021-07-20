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
    let pos = prompt('Enter position: x, y')
    let position = pos.split(' ');
    let y = position[0] - 1;
    let x = position[1] - 1;
    if (field[x][y] === ' ') {
        field[x][y] = 'x';
        console.clear();
        showField(field);
        if (checkConditionGame(field, 'x')) {

            enemyTurn(field);
        } else {
            console.log('WINER: x');
            let again = prompt('Play again? Press Y/y')
            if (again === 'y' || again === 'Y') {
                main();
            }
        }
    } else {
        playerTurn(field);
    }
}

const enemyTurn = (field) => {

    let isTurnEnd = true;
    while (isTurnEnd) {
        let x = Math.floor(Math.random() * 3);
        let y = Math.floor(Math.random() * 3)
        if (field[x][y] === ' ') {
            isTurnEnd = false;
            field[x][y] = 'o'
            console.clear();
            showField(field);
            checkConditionGame(field, 'o') ? playerTurn(field) : console.log('WINER: ' + 'o');
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
