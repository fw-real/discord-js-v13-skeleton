const { Client } = require("discord.js")
const mongoose = require("mongoose");
const { database } = require("../../config.json");
module.exports = {
	name: "ready",
	once: true,
	/**
	 * @param {Client} client
	 */
	execute(client) {
		console.log("The client is now ready!")
		client.user.setActivity("HELLO!", {type: "WATCHING"});
		
		if(!database) return;
		mongoose.connect(database, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		}).then (() => {
			console.log("The client has now established connection to the database!")
		}).catch((err) => {
			console.log(err)
		});
	}
}