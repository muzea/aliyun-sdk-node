export interface SendMessageResponse {
    /**
     * 消息的唯一标识，消息发送成功后服务端会返回消息ID。
     * @example `0B736D997B7F45FF54E61C1C1B58****`
     */
    MsgId: string;
    /**
     * 公共参数，每个请求的ID都是唯一的。
     * @example `020F6A43-19E6-4B6E-B846-44EB31DF****`
     */
    RequestId: string;
}
