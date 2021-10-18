/*
    Bot replies when it hears "hi jamie"
*/
module.exports = {
	name: 'messageCreate',
	once: false,
	execute(msg) {
		if (msg.content === 'hi jamie') {
			msg.reply('Hi there!');
		}
	},
};