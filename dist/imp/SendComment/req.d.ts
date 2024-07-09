export interface SendCommentRequest {
    /**
     * 用户的应用ID，在控制台创建应用时生成。包含小写字母、数字，长度为6个字符。
     * @example `7m***q`
     */
    "AppId": string;
    /**
     * 房间的唯一标识，在调用CreateRoom时返回。
     * @example `AE35****T95F`
     */
    "RoomId": string;
    /**
     * 弹幕消息发送者的用户ID，最大长度不超过32个字节。
     * @example `62**59`
     */
    "SenderId": string;
    /**
     * 弹幕消息的发送者昵称，最大长度不得超过128个字节。如果为空，则采用弹幕消息发送者的用户ID在进入房间时注册的昵称。如果对应昵称仍然为空，则显示为空。
     * @example `Tom`
     */
    "SenderNick"?: string;
    /**
     * 弹幕消息的内容。最大的长度不超过256个字节。
     * @example `Hello, World`
     */
    "Content": string;
    /**
     * 扩展字段，key-value形式，服务端会把拓展字段信息一并推送到客户端。
     */
    "Extension"?: any;
}
