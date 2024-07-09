export interface DeleteEventSourceResponse {
    /**
     * 错误信息
     * @example `Remote error. requestId: [78B66E68-E778-1F33-84BD-xxxx], error code: [EventSourceNotExist], message: [The event source in request is not exist! ]`
     */
    Message: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `5f80e9b3-98d5-4f51-8412-c758818a03e4`
     */
    RequestId: string;
    /**
     * 接口返回码：Success：表示成功。                                 其它：表示错误码。错误码详情，请参见错误码。
     * @example `Success`
     */
    Code: string;
    /**
     * 操作成功返回true。
     * @example `true`
     */
    Success: boolean;
}
