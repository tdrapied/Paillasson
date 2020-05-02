'use_strict';

const emoteSearch = require('../utils/emoteSearch');

/**
 * @param {Client} client
 * @param {Error} err
 */
module.exports = (client, err) => {

    console.error(err);
    const log = `${emoteSearch('red_cross_mark')} **Error :**\n\`\`\`${err.message}\`\`\``;
    client.sendLog('error', log);

};
