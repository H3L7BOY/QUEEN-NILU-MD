const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.password = 'janith'
global.owner = process.env.OWNER_NUMBER || ("4915147775878") //Your Number
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://nilunilu:janith1234@cluster0.zluxwdv.mongodb.net/?retryWrites=true&w=majority" //Ur Mongodb URI
global.port= process.env.PORT || 5000
global.email = 'atlanticrecords221@gmail.com' // ur Email
global.github = 'https://github.com/H3L7BOY/QueenNilu' //Github
global.location = 'Kandy LK'
global.gurl = 'https://instagram.com/h3l7boy' // add your username
global.sudo = process.env.SUDO || '+48888888889'
global.devs = '+4915147775878';
global.website = 'https://janithsadanuwan.tech/QueenNilu' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.imgur.com/RQixsxS.jpeg'
module.exports = {
  NILU: process.env.NILU_PASSWORD === undefined ? 'janith' : process.env.NILU_PASSWORD,
  LANG: process.env.THEME|| 'EN', //Change Language 
  botname: process.env.BOT_NAME || 'katsuki', //Bot Name
  alivelogo: process.env.ALIVE_LOGO || 'https://i.imgur.com/RQixsxS.jpeg', //Alive Logo
  ownername:process.env.OWNER_NAME || 'infernö katsumí',
  sessionName: process.env.SESSION_ID || '',
  author: process.env.PACK_INFO || (";")[0] || 'Katsuki +49', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'false',
  packname: process.env.PACK_INFO || (";")[1] || 'Katsuki +49 ',
	
  autoreaction: process.env.AUTO_REACTION || 'off',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'false',
  antifake : process.env.FAKE_COUNTRY_CODE || '',
  readmessage: process.env.READ_MESSAGE || true,
  HANDLERS: process.env.PREFIX || ['.',' '],
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  BRANCH: 'main',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || '',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'OPENAI_KEY',
  VERSION: process.env.VERSION === undefined ? 'v.2.0.0' : process.env.VERSION,
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
