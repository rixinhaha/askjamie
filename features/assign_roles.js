/*
    On start up, bot asks in #general channel for reactions, and then assigns roles based on response to question
*/

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		client.channels.cache.find(channel => channel.name === 'start-here').send(`>>> **What year are you?**
🍊 - Class of 2025
🍉 - Class of 2024
🍈 - Class of 2023
🍇 - Class of 2022
🌽 - Transfer student
🥥 - Grad student
🥑 - Alumni

React with the appropriate emoji(s) to assign yourself role(s).`)
			.then(async (msg) => {
				// Ensure reactions are created by bot before tracking begins
				await msg.react('🍊');
				await msg.react('🍉');
				await msg.react('🍈');
				await msg.react('🍇');
				await msg.react('🌽');
				await msg.react('🥥');
				await msg.react('🥑');

				// when reaction is added
				client.on('messageReactionAdd', (reaction, user) => {
					if (reaction.message.id !== msg.id) return;
					const emoji = reaction.emoji.name;
					switch (emoji) {
					case '🍊':
						addRole(msg, user, 'C.O. 2025');
						break;
					case '🍉':
						addRole(msg, user, 'C.O. 2024');
						break;
					case '🍈':
						addRole(msg, user, 'C.O. 2023');
						break;
					case '🍇':
						addRole(msg, user, 'C.O. 2022');
						break;
					case '🌽':
						addRole(msg, user, 'Transfer');
						break;
					case '🥥':
						addRole(msg, user, 'Grad');
						break;
					case '🥑':
						addRole(msg, user, 'Alumni');
						break;
					default:
						break;
					}
				});


				// when reaction is removed
				client.on('messageReactionRemove', (reaction, user) => {
					if (reaction.message.id !== msg.id) return;
					const emoji = reaction.emoji.name;
					switch (emoji) {
					case '🍊':
						removeRole(msg, user, 'C.O. 2025');
						break;
					case '🍉':
						removeRole(msg, user, 'C.O. 2024');
						break;
					case '🍈':
						removeRole(msg, user, 'C.O. 2023');
						break;
					case '🍇':
						removeRole(msg, user, 'C.O. 2022');
						break;
					case '🌽':
						removeRole(msg, user, 'Transfer');
						break;
					case '🥥':
						removeRole(msg, user, 'Grad');
						break;
					case '🥑':
						removeRole(msg, user, 'Alumni');
						break;
					default:
						break;
					}
				});
			});
	},
};

function addRole(msg, user, roleName) {
	const roleObject = msg.guild.roles.cache.find(role => role.name === roleName);
	msg.guild.members.fetch(user).then((member) => {
		member.roles.add(roleObject);
	});
	console.log(`Assigned user ${user.username} to role ${roleObject.name}`);
}

function removeRole(msg, user, roleName) {
	const roleObject = msg.guild.roles.cache.find(role => role.name === roleName);
	msg.guild.members.fetch(user).then((member) => {
		member.roles.remove(roleObject);
	});
	console.log(`Removed user ${user.username} from role ${roleObject.name}`);
}