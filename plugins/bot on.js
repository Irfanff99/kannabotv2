let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Uaaaaawh🥱, Maap kak Ipan Bot tadi ketiduran😊* ')
}

handler.tags = ['main']
handler.command = /^(ipanon)$/i

handler.admin = true

export default handler
