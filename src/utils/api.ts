import { API_URL, bot, BOT_NAME, CHANNEL_HANDLE } from "../config"
import { ButtonContentGroup, RequestType } from "../types"

const requestAPIMsg = async (title: RequestType, content: ButtonContentGroup = []) => {
    const param = title.param && Object.entries(title.param)
        .map(([key, value]) => `\n\t\t${key}: \`${value}\``)

    const data = title.data && Object.entries(title.data)
        .map(([key, value]) => `\n\t\t${key}: \`${value}\``)

    console.log("Request URL : ", title.url);

    console.log(param, data);


    const styledTitle =
        `*URL* : \`${title.url}\`\n*Method* : \`${title.method}\`${title.param == undefined ? "" : `\n*Param* : ${param}`}${title.data == undefined ? "" : `\n*Data* : ${data}`}\n\nFrom [${BOT_NAME}](${API_URL})`

    const msgId = await bot.sendMessage(CHANNEL_HANDLE, styledTitle, {
        reply_markup: {
            inline_keyboard: content
        },
        parse_mode: "Markdown"
    })

    return msgId.message_id
}

const respondAPIMsg = async (msgId: number, title: Object, status: "success" | "error" = "success", content: ButtonContentGroup = []) => {
    const data = JSON.stringify({ "<code>DATA</code>": title, "<code>STATUS</code>": status }, null, 2)

    console.log("Response : ", title);

    await bot.sendMessage(CHANNEL_HANDLE, `<b>Returned Data</b> : \n${data}\n\nFrom <a href="${API_URL}">${BOT_NAME}</a>`, {
        reply_markup: {
            inline_keyboard: content,
        },
        reply_to_message_id: msgId,
        parse_mode: "HTML",
    })
}

export {
    requestAPIMsg,
    respondAPIMsg
}