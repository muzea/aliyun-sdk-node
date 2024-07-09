export interface DeleteEventBusResponse {
    /**
     * 错误信息
     * @example `EventBusNotExist`
     */
    Message: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `C229E140-1A5C-5D55-8904-CFC5BA4CAA98`
     */
    RequestId: string;
    Data: boolean;
    /**
     * 接口返回码：200：表示成功。                                 其它：表示错误码。错误码详情，请参见错误码。
     * @example `200`
     */
    Code: string;
    /**
     * 操作成功返回true。
     * @example `true`
     */
    Success: boolean;
}
