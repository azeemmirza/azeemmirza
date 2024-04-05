import chalk from 'chalk';

// Text + chalk definitions
const data = {
    name: chalk.white.bold('AZEEM MIRZA'),
    title: chalk.grey('Software Engineer'),
    handle: chalk.cyan('azeemmirza'),
    twitter: chalk.cyan('twitter.com/azeeemmirza'),
    github: chalk.cyan('github.com/azeemmirza'),
    linkedin: chalk.cyan('linkedin.com/in/azeeemmirza'),
    web: chalk.cyan('azeemmirza.co'),
    npx: chalk.white('npx azeemmirza'),

    labelWork: chalk.dim.bold('      Work:'),
    labelTwitter: chalk.dim.bold('   Twitter:'),
    labelGitHub: chalk.dim.bold('    GitHub:'),
    labelLinkedIn: chalk.dim.bold('  LinkedIn:'),
    labelWeb: chalk.dim.bold('       Web:'),
    labelCard: chalk.dim.bold('      Card:')
  }
  
  // Actual strings we're going to output
  const newline = '\n';
  const heading = `${data.name}`;
  const title = `${data.title}`;
  const twittering = `${data.labelTwitter}  ${data.twitter}`;
  const githubing = `${data.labelGitHub}  ${data.github}`;
  const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
  const webing = `${data.labelWeb}  ${data.web}`;
  const carding = `${data.labelCard}  ${data.npx}`;
  
  // Put all our output together into a single variable so we can use boxen effectively
  const output = heading + newline + title + newline + newline + twittering + newline + githubing + newline + linkedining + newline + webing + newline + newline + carding;

export default output;