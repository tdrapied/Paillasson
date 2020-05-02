'use_strict';

const emote = require('../data/emote.json');

/**
 * @param {string} name
 */
module.exports = name => {

    const id = emote[name];
    if (!id) return "";

    return `<:${name}:${id}>`;

};
