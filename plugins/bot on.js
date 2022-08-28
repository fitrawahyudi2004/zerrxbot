let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Uaaaaawh🥱, Maaf kak Zerrx tadi ketiduran😊* ')
}

handler.tags = ['main']
handler.command = /^(zerrxon)$/i

handler.admin = true

export default handler