export interface DeleteEventStreamingResponse {
    /**
     * 错误信息
     * @example `The event streaming [xxxx] not existed!`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `499A9ACF-70CD-5D43-87F3-1B60529EE446`
     */
    RequestId: string;
    /**
     * 接口返回码：
     * Success：表示成功。
     * 其它：表示错误码。错误码详情，请参见错误码。
     * @example `Success`
     */
    Code: string;
    /**
     * 操作成功返回true。
     * @example `true`
     */
    Success: boolean;
}
