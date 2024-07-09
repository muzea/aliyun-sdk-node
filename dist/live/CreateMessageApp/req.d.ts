export interface CreateMessageAppRequest {
    /**
     * 互动消息应用名称，长度2~16个字符。
     * @example `test`
     */
    "AppName": string;
    /**
     * 应用配置。
     */
    "AppConfig"?: any;
    /**
     * 拓展字段。
     */
    "Extension"?: any;
}
