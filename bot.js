const yahooStockPrices = require('yahoo-stock-prices');
const Discord = require('discord.js');
const client = new Discord.Client();

var currentPrice;
var stockCheck;



yahooStockPrices.getCurrentPrice(stockCheck, (err, price) => {
  currentPrice = price;
  console.log(currentPrice);
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === "!pull") {
    callStock();

    msg.reply(stockCheck + " is currently at $" + currentPrice + " USD" + "\n Would you like to get hourly updates?");
    msg.channel.send('React to this message!').then(sentEmbed => {
    sentEmbed.react("👍");
    sentEmbed.react("👎");
  });
}});

function callStock() {
  message.reply("What stock would you like to pull?: ");
        message = message.first();
        stockCheck = message.content();
        console.log(stockCheck);


};


client.login('ODA0NDE4MDY0MTIwNDE0MjU0.YBMCsw.qDeA-amudUjIu3wbXDaHmlMWzCo');
