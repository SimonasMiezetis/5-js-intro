const day = 2;

switch (day) {
    case 1:
        console.log('pirmadienis');
        break;

    case 2:
        console.log('antradienis');
        break;

    case 3:
        console.log('treciadienis');
        break;

    default:
        console.log('tokia diena neegzistuoja 👀');
        break;
}

const day2 = 2;

switch (day2) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('Darbo diena');
        break;

    case 6:
    case 7:
        console.log('Savaitgalis');
        break;

    default:
        console.log('Ne savaites diena...');
        break;
}