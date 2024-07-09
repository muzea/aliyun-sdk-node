export interface CreateConsumerGroupResponse {
    /**
     * 消费组ID。
     * @example `dtswc411cg617p****`
     */
    ConsumerGroupID: string;
    /**
     * 请求ID。
     * @example `6063641E-BAD1-4BA7-B70B-26FFFD18****`
     */
    RequestId: string;
    /**
     * 调用出错时返回的错误码。
     * @example `InternalError `
     */
    ErrCode: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: string;
    /**
     * 调用出错时返回的错误信息。
     * @example `The request processing has failed due to some unknown error.`
     */
    ErrMessage: string;
}
