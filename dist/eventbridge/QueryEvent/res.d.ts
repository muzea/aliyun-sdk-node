export interface QueryEventResponse {
    /**
     * 错误信息。
     * @example `EventBusNotExist`
     */
    Message: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `580A938B-6107-586C-8EC7-F22EEBEDA9E6`
     */
    RequestId: string;
    /**
     * CloudEvent事件内容。
     */
    Data: any;
    /**
     * 接口返回码：
     * 200：表示成功。
     * 其它：表示错误码。错误码详情，请参见错误码。
     * @example `200`
     */
    Code: string;
    /**
     * 操作成功返回true。
     * @example `true`
     */
    Success: boolean;
}
