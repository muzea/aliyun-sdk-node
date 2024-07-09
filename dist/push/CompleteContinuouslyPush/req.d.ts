export interface CompleteContinuouslyPushRequest {
    /**
     * AppKey信息。
     * @example `23267207`
     */
    "AppKey": number;
    /**
     * 消息ID。
     * 调用Push接口，设置Target为TBD，调用后获得的MessageId。它代表了一个已经保存到推送系统的消息。
     * @example `500131`
     */
    "MessageId": string;
}
