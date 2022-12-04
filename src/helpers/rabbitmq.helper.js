// Rabbit MQ
const rabbitmq = require('../config/rabbitmq')

const userLogController = require('../controllers/api/userLog.controller');

receive = async () => {

    // Instance For Rabbit MQ
    const broker = await rabbitmq.getInstance();

    // Directly Consume
    broker.consume('store_product', (msg) => {

        // Storing to Database
        userLogController.store(JSON.parse(msg));

        return JSON.parse(msg);
    })
}

module.exports = {
    receive
};