export interface UpdateMessageGroupRequest {
    /**
     * 消息组ID。
     * @example `AE35-****-T95F`
     */
    "GroupId": string;
    /**
     * 互动消息应用ID。
     * @example `VKL3***`
     */
    "AppId": string;
    /**
     * 拓展字段。
     */
    "Extension"?: any;
}
