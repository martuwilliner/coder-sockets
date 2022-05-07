//require knex
const knex = require('knex');
//require config
const config = require('../../knexfile');
//create knex instance
const db = knex(config.development);


class ChatSql3 {
    
    getAllMessages() {
        return db('messages'); //returns all messages from the database table messages
    }
    saveMessage(message) {
        return db('messages').insert(message); //inserts message into the database table messages
    }
    deleteMessage(id) {
        return db('messages').where('id', id).del(); //deletes message from the database table messages
    }
    updateMessage(id, message) {
        return db('messages').where('id', id).update(message); //updates message in the database table messages
    }
}

module.exports = ChatSql3;