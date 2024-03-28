const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@cluster0.t1wsjlv.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/hacker/darkweb";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9JP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9JP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1441cfb65678dc21d6e5b.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "254705529658" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254705529658";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/1441cfb65678dc21d6e5b.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_02_03_27_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwidUhkMGZ1ODlSUkRGZzFwSXV5SG5HTDdjdXdxNjhZMmVsQzl5a1l3VEFVbz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlF5Ulk2VmIrNDVLd0JtaTlxWjBES1BZRHJVK3pEbW1pZVNnbkgya0lEanc9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiV05TMUp4NGx3QVhGM2V6QVNhK1FDSW1WQ1hMM2VxbkNhUVhpaHJ3MnYybz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkl6ZTFVOGdxWFBQcC8rNnYwaGJIdHJPdFpYa1dwbGlRN3hFRXVXckk1RE09XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwidUUvLzRid0w4VWVnY0VaVmd0bXVBN09KbkkzdTVWTmdXSHFmQi9mRFlXcz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIk1PaVFXRVp3cnovSWJoM0ZmUjB0bXM0a0VHb0I5RmhoWnBPdnNLTWJydzQ9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ5Sjk5dmI2eC9wNTlWOWYrSHd5ZGluTnU0T3BpNDZiVmlEejdSZDV1eTJnPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQUZZcURqTGZzb3N3ZHo5blJjUkV0S3NvdWVSUVh3UmZ0dVFVTStFMEtBOD1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJmWmMxYk4zQmFnbjk3dW55b1hnYnBaN1ZONjd0ZHVFS3BpT3FVcnFNMHZXYjMxZVVGMTNvbEJKWGd3d2JWdUlnSDhXcG9LcXVROHJ1WjFzUGsvbkRpQT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTU5LFwiYWR2U2VjcmV0S2V5XCI6XCJGRnl5dXUwdXJjdzFKL2lWOWVkV2Y0NjhKYldqSFg0RTc4QWRCME5rWTRJPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W10sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwicHFPLThWSTNSTnVrRjMwYmZ1TjN0QVwiLFwicGhvbmVJZFwiOlwiYWJhMmM5YjUtMmY5MS00OWY1LTgxZTQtZjc5ZjRjOGVkZDZmXCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJpMXVLU3VwQkJpVVcvV3d0eCs1M0Erck1BL2s9XCJ9LFwicmVnaXN0ZXJlZFwiOmZhbHNlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjIyRytBbEgrSXVUVTNneC9aNDhZcSs5eVZJWT1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDUHVpMEx3REVONjBqckFHR0EwZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIkVudHVjSjJLZ2JDOXZ3VzJFL2FqVTcxWjc0WFh3S1RPZlpzMGw4UlhtU3c9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCI0ZWNCT21HQnhGSlg0OGkwMEFjMlhOMVB4RUZoVnNpQjM2Wnd0NVZKMURqd3JYbi9iSitoWDJ0NE56SklqQm9nc3JaVHRmd3hCcFBqNVcwS3ZhanpCQT09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcIjJLYmhFaW02blFHb2dpMk1ZWUZWa1JwN1B2RDkvY0dWK3lmQzkrTEcxVUplQStPSlBmVVZoMitxSThIN3VVeUVNSUlVYzE2ZGtNNytkQ2NRbGZvQ2dnPT1cIn0sXCJtZVwiOntcImlkXCI6XCIyNTQ3MDU1Mjk2NTg6NDZAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiMTIxMTI2NzAxMjczMTMzOjQ2QGxpZFwiLFwibmFtZVwiOlwiQW0gICAgICAgICAgICAgICBoYWNrZXJcIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCIyNTQ3MDU1Mjk2NTg6NDZAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCUko3Ym5DZGlvR3d2YjhGdGhQMm8xTzlXZStGMThDa3puMmJOSmZFVjVrc1wifX1dLFwicGxhdGZvcm1cIjpcImFuZHJvaWRcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MTE1MTIxNjMsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBRDhuXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRDhsLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQVN0ZzlUUTFia1BDdmhnM25PM0ttRkdBV1NhWm1lZjc1Z0lHaU5uNFZCVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MzI0NTA2ODMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUQ4bS5qc29uIjogIntcImtleURhdGFcIjpcImQ4OFFMYjVZaElrempsSU05MTl1MUJNb2YrMEFhUVBPZkgxVGZ5OFV3WkU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTMyNDUwNjgzLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDNdfSxcInRpbWVzdGFtcFwiOlwiMTcwOTYyMjE4MjA2NlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUQ4bi5qc29uIjogIntcImtleURhdGFcIjpcIjBlRSs2d0NUWFYvaFk2dExrZ3ByK1ZYbys2dm1vZEc0c1M1bXZZWXZRUDQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTMyNDUwNjgzLFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwxLDRdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUQ4by5qc29uIjogIntcImtleURhdGFcIjpcIm5zaEY5ZGdFcXBzRzZzOHBXQlEvTjRtdW1id3lsc2VMb2ZrcDM3eW9TTlE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTMyNDUwNjgzLFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCw0XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDk5MTc4NjAzNjNcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEOHAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ5a3NUNVVMbGcrdmVNbnhRQVM4RWMySDBkOWhNNXMyRlkzUDczOFBOb2hrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjkzMjQ1MDY4MyxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsNCw1XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTA0ODg4ODI3MzFcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEOHIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ0c3VVR01QRHB4ZjdxNjF1M0FFZkxFRWNVV0k3UUlza2Z4c3BDemNXVm1jPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjkzMjQ1MDY4MyxcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsNCw1XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEOHMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJSZXN1OXp6WlZCR3pCVzd6NlBPSW9QcjBVT2FaYWI4cWVERjB0dXRIOTlZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjkzMjQ1MDY4MyxcImN1cnJlbnRJbmRleFwiOjgsXCJkZXZpY2VJbmRleGVzXCI6WzAsNCw1XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEOHQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ4VGplbU9WUDMxdWM2bjVueHg3NVd5RmxieVNMSldpYWVneFZiaWpjc2o0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjkzMjQ1MDY4MyxcImN1cnJlbnRJbmRleFwiOjEwLFwiZGV2aWNlSW5kZXhlc1wiOlswLDQsNSwxMF19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRDh1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiN25UcS9ZM3JaY0x2N1FTbjIyYWw1Lzl5YjUvdkdVSmVCLzFDc1dTbkhNND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MzI0NTA2ODMsXCJjdXJyZW50SW5kZXhcIjoxMCxcImRldmljZUluZGV4ZXNcIjpbMCw0LDVdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUQ4di5qc29uIjogIntcImtleURhdGFcIjpcIlpaQ1hYOVNKREQ4SEY5cXNJd1FFYjhRM3BBd0t0SklqU0pQRTlTMFZPSVU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTMyNDUwNjgzLFwiY3VycmVudEluZGV4XCI6MTEsXCJkZXZpY2VJbmRleGVzXCI6WzAsNCw1XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEOHcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJSTGlqUWRxZEx0ZC9EQ2FiM1FFb0txRUlJc2tLczBrTlh5NURFbTlFQUdJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjkzMjQ1MDY4MyxcImN1cnJlbnRJbmRleFwiOjExLFwiZGV2aWNlSW5kZXhlc1wiOlswLDRdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQ2dBQUQ4cS5qc29uIjogIntcImtleURhdGFcIjpcIktTaGNVaXhRVjZZNzh3Q1lyYWpsTC9yNWdpTm9IV3dwbmExR25jOGJzcEU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTMyNDUwNjgzLFwiY3VycmVudEluZGV4XCI6NyxcImRldmljZUluZGV4ZXNcIjpbMCw0LDUsNDBdfSxcInRpbWVzdGFtcFwiOlwiMTcxMDQ4OTQ2MjA4NVwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".,",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©hacker" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ hacker 』```", //*『sᴜʙsᴄʀɪʙᴇ • hacker ᴛᴇᴄʜ』*\n youtube.com/@darkweb"),
 
  author : process.env.PACK_AUTHER|| "hacker",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "Hacker",
  ownername:process.env.OWNER_NAME|| "It'x Hacker",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "HACKER"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
