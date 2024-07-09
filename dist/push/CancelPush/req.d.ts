export interface CancelPushRequest {
    /**
     * AppKey信息。
     * @example `23267207`
     */
    "AppKey": number;
    /**
     * 某次推送任务的消息ID。
     * @example `501029`
     */
    "MessageId": number;
}
