import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
await conn.sendMessage(m.chat, {
          react: {
            text: '⏱️',
            key: m.key,
          }})
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `*STORE-BOT*                      _store-bot ᴀᴅᴀʟᴀʜ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʏᴀɴɢ ᴅɪ ʙᴜᴀᴛ ᴜɴᴛᴜᴋ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴘᴇᴋᴇʀᴊᴀᴀɴ ᴏᴛᴏᴍᴀᴛɪꜱ_
ᴊɪᴋᴀ ᴍᴇɴᴇᴍᴜᴋᴀɴ ʙᴜɢ ᴅɪ ᴅᴀʟᴀᴍ ʙᴏᴛ ꜱᴇɢᴇʀᴀ ʜᴜʙᴜɴɢɪ ᴏᴡɴᴇʀ (ᴘᴇᴍɪʟɪᴋ ʙᴏᴛ) ᴀɢᴀʀ ꜱᴇɢᴇʀᴀ ᴅɪ ᴘᴇʀʙᴀɪᴋɪ.\n`,wm + '\n\n' + botdate, thumbdoc, [['SEMUA MENU','.? all'],['DAFTAR MENU','.list']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'NATHAN OFFICIAL 27',          previewType: 0,
                        thumbnail: fs.readFileSync("./MenuAwal.jpg"),
                        sourceUrl: sgc
                      }}
})
await conn.sendFile(m.chat, './mp3/menu-awal.mp3', 'sound.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}


handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = /^(menu|help|co)$/i
export default handler