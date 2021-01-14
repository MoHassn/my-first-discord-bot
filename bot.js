require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE"],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageDelete", (msg) => {
  // console.log(msg);
  // msg.channel.send(msg.content);
  msg.channel.send("Stop Deleting Messages!");
});

client.on("message", (msg) => {
  if (msg.member.id === "709211472013820015") {
    msg.reply("shut up sharmooot", { tts: true });
  }
  if (msg.member.id === "483406730005315586") {
    msg.reply("تعظيم سلام للباشا");
  }
  if (msg.member.id === "717548721746870315") {
    msg.channel.send("Tokhy is Sharmoooot", {
      tts: true,
    });
  }

  // console.log(msg);
  if (msg.content === "a7a") {
    msg.reply("كده عيب ياخول");
  }

  if (msg.content === "!mod-me") {
    msg.member.roles.add("798894482267045938");
  }

  if (msg.content === "you") {
    msg.react("❤️");
  }
});

client.login(process.env.BOT_TOKEN);
