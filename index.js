// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { BingusToken,BongusToken } = require('./config.json');

// Create a new client instance
const clientBingus = new Client({ intents: [GatewayIntentBits.Guilds] });
const clientBongus = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
clientBingus.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});
clientBongus.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});
// Log in to Discord with your client's token
clientBingus.login(BingusToken);
clientBongus.login(BongusToken);


