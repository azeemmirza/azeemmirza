import boxen from 'boxen';
import card from './card.js';

const { log } = console;
const options = {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: 'blue',
};

const output = boxen(card, options)

export default output;