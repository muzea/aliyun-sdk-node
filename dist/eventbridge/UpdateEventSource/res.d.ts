export interface UpdateEventSourceResponse {
    /**
     * 错误信息
     * @example `Remote error. requestId: [xxxx-9D10-65DFDFA3A75D], error code: [EventSourceNotExist], message: [The event source in request is not exist! ]`
     */
    Message: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `c057d379-ea65-41ec-a8a8-90627a9****`
     */
    RequestId: string;
    /**
     * 更新结果
     * @example `true`
     */
    Data: boolean;
    /**
     * 接口返回码：
     * - Success：表示成功。
     * - 其它：表示错误码。错误码详情，请参见错误码。
     * @example `Success`
     */
    Code: string;
    /**
     * 操作成功返回true。
     * @example `true`
     */
    Success: boolean;
}
