//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2348129872434";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUZTYnB2bHNIb2t5RmVSSFhXNU16RGFFKzR0TlFKMHBBL0dScW4zVEIybz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWEF1RmNGa0lUaEVPVE1wUFZYSlE4Qmk2bFB4SVRBYitVYkJYNzVGRFVVUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZT3ozemxITFFxS0JXTzNqTW1nVmRBRTA1K2RmeGZPcHptNWdDNVlVa1hRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJySUtLNXBUMExpanc1ZlhLQ0ErbGdmek5FaXBvQ3RMYm9aODZFeGhtS2hvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFJeFlkTnNUNGNUU3dzeDdvc3ozNEd2ZENnanBxSUx6YlM2eUQyOGw1MlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9OZTNtRVBuWDFrT2NDT2NxSU9hRW1aaTJ3WTc1UWV3NGlEQ3pSTG12UzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JSVkpDTlpIWjNEc0hOQ1ZlZzNCek9vdG0rMTFYczFCVUtDTHdaWjhFdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVmhuS2dmZmtSNEtYbHdQUUo2eCs1Qms2eklKeXB1WFRTaGlNdElLSVgwWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZXZVlHWHM4ZWFGWG83R1IwWTljcHExK1AvV2YydStuUkE1bVNYNEJLdksvUUNlUGQ2RkxvUUY5MkNEb0xuT0hLUGp5K0J6MHgvNHptMEZiWmsydGpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUzLCJhZHZTZWNyZXRLZXkiOiJDWFJRNGVCa3M1VVFhWTkwQk5nNTU3YVFnUmhZTGVGODljby81SjY5TXlrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxMjk4NzI0MzRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRTZCNjQ4OTU3RTE3RDNBQUY1MDI0MUFBNzVFOTM3N0QifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyODkyODI5NH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODEyOTg3MjQzNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3MzY0NkI2ODZENkJCRDI2MzY2RkExNDQyRThFQzYxMiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI4OTI4Mjk1fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJyYmdwRlpGY1FPbVhRRUxXYi01V0l3IiwicGhvbmVJZCI6IjgxNjc5OTgxLWVmYWUtNGJmMC04ZjhlLTliNDY4YzNkY2ZkYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3ZG5ua2hzODZob05PcXpWVG1ldEc3Y2JHYWc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia3l5THc3aDBDQ09iOUxMKys1VWFXMW5ZdVNNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFZOVpEUkIxIiwibWUiOnsiaWQiOiIyMzQ4MTI5ODcyNDM0OjFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BpU2xNa0NFSmUwdGJnR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im9aeGVhMFNkZEp5Y2ZjMzI3bG5MRlcrS0lHN1VJMUFyM3kyYTIxY3dIVHc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkdwOE1CNWM1U3dUcGh4V0g0NkE4TDhYNGMxQmdvN2szclV6akJldjBFUHpqakxwcE5YNElyalVET1EzV0plbCt0Z2t4dXBHaEF6VUFGWC8rdjZIUEJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ1aitGbXJvNFBVQjY0eDhOaENnT1VyM3FCbktNM0o4Vk14ZUp2T01qS3o5R0FjQ2tGZ3p4cXNFaEtDNm9FaXViYmtaNWNYMVZPVUp1Qnhqd2ZqYzBqUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMjk4NzI0MzQ6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhR2NYbXRFblhTY25IM045dTVaeXhWdmlpQnUxQ05RSzk4dG10dFhNQjA4In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI4OTI4MjkyfQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
