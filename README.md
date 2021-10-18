# AskJamie

UCLA SSA Discord Bot. Name is open for debate.

This bot is created using discord.js. 

Interested in contributing? Great, we'd love to get your help! Just speak with any of your seniors about the features you wish to work on, or we can assign you one. If you have a new feature to recommend, speak with the SSA exco or any senior about it. 

## Current Features

1. Assign roles based on reaction

Bot currently resends questionnaire everytime it's restarted. We can introduce database to keep track of previously asked questions to prevent this.

2. Respond to "hi jamie"

## Work in Progress

1. "la" counter
2. Add proper logging
3. Set up database to save message IDs


## Development Guide

1. We recommend using VSCode for development. Install the ESLint extension.

2. Fork and clone this repo.

3. Request for the Discord bot token. Create an .env file in the main directory and paste this, replacing `<DISCORD_TOKEN>` with the token you have.
```
    DISCORD_TOKEN=<DISCORD_TOKEN>
```

4. Install dependencies required for the bot to work. This only needs to be done once (until more dependencies are added).
```
    npm install
```

5. Run the server.
```
    npm run devStart
```
The bot should now be logged in, and you should see `Ready! Logged in as askjamie ..` printed to console.

6. Head over to our [Test Server](https://discord.gg/Ed9nHpXmMa) to interact with and test the bot as you make changes. Note that the discord token is shared amongst contributors, so if the bot appears to be doing something weird in the test server while you're working with it, that might be due to another contributor working on it at the same time.

7. Once done, make a pull request to this repo, and we'll review the changes - make sure there are no linter errors.

## Resources

[Understanding GitHub](https://guides.github.com/activities/hello-world/)

[Linting](https://www.freecodecamp.org/news/what-is-linting-and-how-can-it-save-you-time/)

NPM and Node:

https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/
https://docs.npmjs.com/about-npm#getting-started

[Discord.js](https://discord.js.org/#/)
