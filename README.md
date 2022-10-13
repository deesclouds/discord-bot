A discord bot to play around with and does some basic commands. 

## Documentation need for creating discord bot

[discord docs][https://discord.js.org/#/docs/discord.js/main/general/welcome]

[discord guide][https://discordjs.guide/#before-you-begin]

[discord developer portal][https://discord.com/developers/docs/intro]

[discord bot permissions calculator][https://discordapi.com/permissions.html]

## Getting Started
Check node version
```
node -v
```
If node is not installed install [node][https://nodejs.org/en/download/]

Create our package file:
```
npm init
```
Then press enter repeatedly to cycle through.

Install discord.js via node package manager.
```
npm install discord.js
```

## Optional Packages to add:
zlib-sync: for WebSocket data compression and inflation 
```
npm install zlib-sync
```
erlpack:  for significantly faster WebSocket data (de)serialisation 
```
npm install discord/erlpack
```
bufferutil: for a much faster WebSocket connection 
```
npm install bufferutil
```
utf-8-validate:  in combination with bufferutil for much faster WebSocket processing 
```
npm install utf-8-validate
```
@discordjs/voice:  for interacting with the Discord Voice API 
```
npm install @discordjs/voice
```

## Create our Discord bot via The Discord Developer Portal

**Steps:** 
- Navigate to New Application
- Create an application 
    - create a name
    - then create!
- Navigate to Bot
    - Add Bot
    - Bot Created!
    - Copy Bot Token [THIS IS YOUR PASSWORD!!!]

### Coding our Bot

