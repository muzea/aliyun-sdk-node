export interface QueryPushStatByMsgRequest {
    /**
     * AppKey信息。
     * @example `23267207`
     */
    "AppKey": number;
    /**
     * 推送的消息ID，推送之后会返回该ID。
     * > 推送数据隔天展示，不支持查询今日数据。
     * @example `510427`
     */
    "MessageId": number;
}
