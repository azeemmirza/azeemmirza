#! /usr/bin/env node

const data = require('./card.json');
const colors = require('colors');
const log = console.log;

const links = (links) => {
    if (!Array.isArray(links)) {
        return '';
    }

    return links.map((link) => {
        return `\t${link.type.bold.gray}: \t${link.link}`;
    }).join('\n');
};

const work = (work) => {
    if (!work || !work.title || !work.company ) {
        return '';
    }

    return `${work.title} at ${work.company}`;
};

log(`\n
\t${data.title.america.bold}
\t${data.subtitle.gray.bold}

\t${`Work:`.bold}\t\t${work(data.work)} 

\t${`Website:`.bold}\t${data.website.bold.yellow} 
\tEmail:\t\t${data.email} 

${links(data.links)}

\t${`Command: \t\t`.bold.yellow}${data.command.bold.yellow}

`);