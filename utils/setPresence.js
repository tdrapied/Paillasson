'use_strict';

/**
 * @param {Client} client
 */
module.exports = client => {

    client.user.setPresence({ status: 'idle', activity: { name: 'se faire piétiner.', type: 0 } });

};
