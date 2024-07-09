export interface UpdateEventStreamingResponse {
    /**
     * 错误信息。
     * @example `The name [xxxx] of event streaming in request is already exist!`
     */
    Message: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `0FDD73AA-7A2D-5BD4-B4C0-88AFEBF5F0F5`
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
