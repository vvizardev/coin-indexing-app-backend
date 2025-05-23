"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.savetojson = exports.respondAPIMsg = exports.requestAPIMsg = void 0;
const config_1 = require("../config");
const requestAPIMsg = (title_1, ...args_1) => __awaiter(void 0, [title_1, ...args_1], void 0, function* (title, content = []) {
    const param = title.param && Object.entries(title.param)
        .map(([key, value]) => `\n\t\t${key}: \`${value}\``);
    const data = title.data && Object.entries(title.data)
        .map(([key, value]) => `\n\t\t${key}: \`${value}\``);
    console.log("Request URL : ", title.url);
    console.log(param, data);
    const styledTitle = `*URL* : \`${title.url}\`\n*Method* : \`${title.method}\`${title.param == undefined ? "" : `\n*Param* : ${param}`}${title.data == undefined ? "" : `\n*Data* : ${data}`}\n\nFrom [${config_1.BOT_NAME}](${config_1.API_URL})`;
    const msgId = yield config_1.bot.sendMessage(config_1.CHANNEL_HANDLE, styledTitle, {
        reply_markup: {
            inline_keyboard: content
        },
        parse_mode: "Markdown"
    });
    return msgId.message_id;
});
exports.requestAPIMsg = requestAPIMsg;
const respondAPIMsg = (msgId_1, title_1, ...args_1) => __awaiter(void 0, [msgId_1, title_1, ...args_1], void 0, function* (msgId, title, status = "success", content = []) {
    const data = JSON.stringify({ "<code>DATA</code>": title, "<code>STATUS</code>": status }, null, 2);
    console.log("Response : ", title);
    yield config_1.bot.sendMessage(config_1.CHANNEL_HANDLE, `<b>Returned Data</b> : \n${data}\n\nFrom <a href="${config_1.API_URL}">${config_1.BOT_NAME}</a>`, {
        reply_markup: {
            inline_keyboard: content,
        },
        reply_to_message_id: msgId,
        parse_mode: "HTML",
    });
});
exports.respondAPIMsg = respondAPIMsg;
const savetojson = (data, filename) => {
    const fs = require('fs');
    const path = require('path');
    const filePath = path.join(__dirname, filename);
    fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
        if (err) {
            console.error('Error writing file:', err);
        }
        else {
            console.log(`File ${filename} has been saved.`);
        }
    });
};
exports.savetojson = savetojson;
