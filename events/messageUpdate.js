'use_strict';

const settings = require('../settings.json');

/**
 * @param {Message} oldMessage
 * @param {Message} message
 */
module.exports = (oldMessage, message) => {

    if (!message.guild) return;
    if (message.author.bot) return;

    let client = message.client;

    console.log(message.content);

};
