export interface SendCustomMessageToAllRequest {
    /**
     * 用户的应用ID，在控制台创建应用时生成。包含小写字母、数字，长度为6个字符。
     * @example `7m***q`
     */
    "AppId": string;
    /**
     * 房间的唯一标识，在调用CreateRoom时返回。
     * @example `AE35-****-T95F`
     */
    "RoomId": string;
    /**
     * 自定义消息体的内容，大小不超过2048个字节。
     * @example `Hello, World`
     */
    "Body": string;
}
