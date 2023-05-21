const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.password = 'janith'
global.owner = process.env.OWNER_NUMBER || ("4915147775878") //Your Number
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://turboyt41:tpokWliIZD6tIViD@cluster0.mt0lbtg.mongodb.net/?retryWrites=true&w=majority" //Ur Mongodb URI
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
  sessionName: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUZGbUdOb01VRmNSTG5xQ0IrRUxrQ0dNMythWjBxZVpjbUIraU1GTzJVaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiclUxempadzNNOTBrTmE0bkt2cG5XUFRwMWtxZGpScUFyMHVxa01zMEtXZz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwSEg2cWNxMTVRUURqb3Bad3REd0FNVFJDK1NqSXhzZGY1NmpFV3FJT2xNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJocnBwSEhPOTVOcHV1bFRyK0t0M3pheGdIUnpONFlqL0xqOEU4YnlReFFZPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFGY05lMHd3VzB2a0VoOWJwN0FhUjF1a0FCRWpZYVYzL0Q0WFF0dzhsRWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InA1THNEY3dHanN3em5UYjA0alF6WHk4TWM2UzRHemxFNFRQZVI1cGdJMzg9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKUGZ3dG8yS28xSW1IQ1dqbVI1QzRiNmRtSFAyMXk2eDVnLzA3UlYwaTJvOTdkOGExSFNoNCsycng4d1F5Q3d5QmprVFZuaG1GWWVQSXM0NkpPa2RqZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE4NywiYWR2U2VjcmV0S2V5IjoiOG5nTEp6aW4wV3VaRi9RS3ZKeGdDMkxiN3NTcCtrYUVFQWxFbm9oNWRTaz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSkcydk5zSEVLT0twcU1HR0FFPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI4SFlWNUNyOTh0dWlRQjROdnYxYmdhOEFzc3ljYTVNQ3V3d2Y1eTRLdTNNPSIsImFjY291bnRTaWduYXR1cmUiOiI3VE9IcjlkUHIxMHJDU3hUVzBTbnFnUlRlUEdhWGtMYU9TWndNVFBnS0lUUGtBQmZvekpTYjNTTUJqNXBRMXo2SGJvalRoZi84YTBnMzh2elNTTmFBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQWlGanRldDdnZjVYbThwVmkvNE1TZjlkTytBV3F1Z2dHUndPeXZsUzRSUUcxK2U3SXIweWtpbmZnNDF4N2VGZEJBdFptQjB3a3d4dDNlSENrYXhsZ2c9PSJ9LCJtZSI6eyJpZCI6IjQ5MTUxNDc3NzU4Nzg6MUBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI0OTE1MTQ3Nzc1ODc4OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZkIyRmVRcS9mTGJva0FlRGI3OVc0R3ZBTExNbkd1VEFyc01IK2N1Q3J0eiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTY4NDYzNjk2NX0=',
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
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || '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',
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
