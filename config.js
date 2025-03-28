//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "lamontbins@outlook.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/caseyweb/QUEEN-CHARITY";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/o4f1bs.jpg";
global.devs = "254112192119";
global.sudo = process.env.SUDO || "2349153232038";
global.owner = process.env.OWNER_NUMBER || "27616879910";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/knhyh3.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.auto_like_status = process.AUTO_LIKE_STATUS || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://caseypair2.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZURPQ0xOUGFQNHdtbnhETzJUSW9PN0hydDh2bVJQOXYrdUM3bENBMStFND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVNYNmdqRnN4TmdqOUhEcFowODFVRWdJNEFZS295TlZ6UnZoVVN5YlNRST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRUHpud1BMU1NZZEpQb3h0eHFRRlVKSkhGTWQ0dXMrNnRmUTZ3cy8wdFVFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJObnFXTGhwa1lBRTAvYkUzL3YyV1RmVXpHR1hocm5rOFdNYm5lZGNHTTE4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9GMHF6Z3dqcGhTdXovbDNCdGsxRWlwK1JNNkdRSU1jN3R2VlhYd0k3bTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxxVkZXbktHUEFsYytQMTYxTjJITmlmRHhLQmVxSFI5TG5kVkNmTkN6bnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUVLTXlJcDU0M2pzUEs0UEpHNFpvODBiSTd2UE5QZDdWOEpYalFkU3FHdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUVvSUNoU1JVWEF3V3FLa2R2cFdEWk5tNUpzVFYyYWloNDNZS0t5cnIyZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikc3R0pkTTlORWVYMEo2Qnl5OVVkWTFFU2pNcWV1bUY1bm5CM2JWNXM4N3VBSGw2dFUzZ2xEbm5jN0RIVWNXeVJCVG1nQUNYaVF0MWN4aE5CbWFXQWlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjUsImFkdlNlY3JldEtleSI6InNPTlNJaE1uS1FESHMrZHMyYVcwWEliY1F0YmFVTzN4Q0FOenI1Z2E1M3c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InpmV1lvZm53UmVlNmNheHVNNDd0V2ciLCJwaG9uZUlkIjoiOGFiNzBhMTctZDRiYS00OTZjLTg0OTUtYjFjZTZkZmU4OWJiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InB5TTQ2WllFVmtXSTF3dUNXMVZPbXU1N0V6VT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlZ1JVS1VOb2NEeUFpR2U2R3NhM0tRcnhPUXc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTU0yQThGVFEiLCJtZSI6eyJpZCI6IjI3NjE2ODc5OTEwOjIwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuG0rMuh4bWWyrDhtYMgW1LMg8OLw4RQw4tSzINdIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMQ1Z1UEVCRUkycW5MOEdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJHeEhRT3RweHJkcEwvb1dNVndqSERHaHdTUTRzZUFkbkJ2YVhjUnV2Z3c0PSIsImFjY291bnRTaWduYXR1cmUiOiJZa1ZhVzNkaS9pNXNtVlBsU3NvOFk0M0hjRTJwZkZNNVgxdnd5ZTZoYU9zeHdSNVJqdTR3WS9RcGU2ZnVYSEJVbGtiSk96Nm92eVZBcVRBN1ZNUVhDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMkR2cGIrQmViZ0JtQlp5Q0t2L3BRUWFqdjM2SjN4N3oxUlZLRTQ3Mm1JS1FsbnNkSGM5WU9kOG9rbENBM3RtbllXVzd1YXlHNUVNQTg1SmJuMDAwaFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzYxNjg3OTkxMDoyMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSc1IwRHJhY2EzYVMvNkZqRmNJeHd4b2NFa09MSGdIWndiMmwzRWJyNE1PIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQzMTk3NDY2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFNNSJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "?",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "ᡕᠵ᠊ᡃ່࡚ࠢ࠘⸝່ࠡ᠊߯ᡁࠣ࠘᠊᠊ࠢ࠘气亠===",
  author: process.env.PACK_AUTHER || "𒀱ꪳ𓊈𒆜𓂀ᴸᴼᴿᴰℂ𝔸𝕊𝔼𝕐ℝℍ𝕆𝔻𝔼𝕊𓂀𒆜𓊉 𒀱",
  packname: process.env.PACK_NAME || "ᵀⁱᵗᵃⁿᡕᠵ᠊ᡃ່࡚ࠢ࠘⸝່ࠡ᠊߯ᡁࠣ࠘᠊᠊ࠢ࠘气亠===",
  botname: process.env.BOT_NAME || "`𝗤𝗨𝗘𝗘𝗡_𝗖𝗛𝗔𝗥𝗜𝗧𝗬`",
  ownername: process.env.OWNER_NAME || "ᵀⁱᵗᵃⁿᡕᠵ᠊ᡃ່࡚ࠢ࠘⸝່ࠡ᠊߯ᡁࠣ࠘᠊᠊ࠢ࠘气亠===",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
    
