export interface UpdateMessageAppRequest {
    /**
     * 互动消息应用ID。
     * @example `VKL3***`
     */
    "AppId": string;
    /**
     * 互动消息应用名称。
     * @example `testApp`
     */
    "AppName"?: string;
    /**
     * 应用配置。
     */
    "AppConfig"?: any;
    /**
     * 拓展字段。
     */
    "Extension"?: any;
}
