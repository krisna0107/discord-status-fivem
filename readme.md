# Discord Server Status For FiveM
## About
This is a bot to display the number of players on the FiveM server. It has been adapted to support linux and windows.
## Installation
* Download / clone File
* Configuration your server and bot on **config.json**
```json
{
    "type" : "WATCHING", // Type Bot WATCHING / PLAYING
    "token" : "NzYw.......", // Token Discord Bot
    "host" : "http://x.x.x.x", // Host your server, change x.x.x.x and add your port, ex :  x.x.x.x:30120
    "off_status" : "SERVER Offline" // Server status when offline
}
```
* Install resource npm
```sh
npm i
```
* Run index.js
```sh
node index
```