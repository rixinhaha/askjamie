// Load configs from .env
require('dotenv').config();

// Create new client instance
const fs = require('fs');
const { Client, Intents } = require('discord.js');

// Create a new client instance (32767 accommodates all intents)
const intents = new Intents(32767);
const client = new Client({ intents });

// Read features from folder
const eventFiles = fs.readdirSync('./features').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	const event = require(`./features/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	}
	else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

// Login to Discord using the token
client.login(process.env.DISCORD_TOKEN);