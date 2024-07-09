export interface CreateConsumerChannelResponse {
    /**
     * 状态码。
     * @example `200`
     */
    HttpStatusCode: string;
    /**
     * 请求ID。
     * @example `5F566C5B-E5B0-4020-A531-FC6F5005****`
     */
    RequestId: string;
    /**
     * 调用出错时返回的错误码。
     * @example `InternalError`
     */
    ErrCode: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: string;
    /**
     * 调用出错时返回对应的错误信息。
     * @example `The request processing has failed due to some unknown error.`
     */
    ErrMessage: string;
    /**
     * 消费组ID，可在下游客户端消费订阅数据时传入。
     * @example `dtsor2y66j4219****`
     */
    ConsumerGroupID: string;
}
