
let handler = async (m, { usedPrefix, command }) => {
let uptime = await process.uptime()
let runtime = `${global.packname}

✰ 𝗧𝗶𝗲𝗺𝗽𝗼 𝗔𝗰𝘁𝗶𝘃𝗮: ${rTime(uptime)}`
conn.reply(m.chat, runtime, m, { contextInfo: { externalAdReply: { mediaUrl: false, mediaType: 1, description: false, title: packname, body: '💫 ¡Super Bot De WhatsApp!', previewType: 0, thumbnail: icons, sourceUrl: channel}}})
}
handler.help = ['runtime']
handler.tags = ['main']
handler.command = /^(uptime|runtime)$/i

export default handler

const dd = new Date(new Date + 3600000);
const time = dd.toLocaleString('en-US', { 
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true 
    });

function rTime(seconds) {
  seconds = Number(seconds);
  let d = Math.floor(seconds / (3600 * 24));
  let h = Math.floor((seconds % (3600 * 24)) / 3600);
  let m = Math.floor((seconds % 3600) / 60);
 let s = Math.floor(seconds % 60);
  let dDisplay = d > 0 ? d + (d == 1 ? " dia, " : " Dias, ") : "";
  let hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " Horas, ") : "";
  let mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " Minutos, ") : "";
  let sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " Segundos") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};