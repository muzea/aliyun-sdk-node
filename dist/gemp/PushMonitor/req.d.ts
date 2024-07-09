export interface PushMonitorRequest {
    /**
     * 集成接入的apiKey。
     * @example `dfb2e51a58e64152a0eef7a232308006`
     */
    "apiKey": string;
    /**
     * 推送的数据内容。
     * @example `2020-03-15 21:46:34.164 ConsumeMessageThread_13 INFO  LOGGER_SPM 订单创建|Y|10`
     */
    "body"?: string;
}
