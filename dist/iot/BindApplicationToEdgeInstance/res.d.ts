export interface BindApplicationToEdgeInstanceResponse {
    /**
     * 接口返回码。Success表示成功，其它表示错误码。详情请参见[错误码](~~135200~~)。
     * @example `Success`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `request parameter error`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `86B23D5F-BF86-4F29-82E2-686D7B4D9AAA`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。true表示调用成功，false表示调用失败。
     * @example `true`
     */
    Success: boolean;
}
