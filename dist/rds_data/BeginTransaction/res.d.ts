export interface BeginTransactionResponse {
    /**
     * 请求ID。
     * @example `4FD736C2-D774-5ACF-8366-8A72114BE7F9`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `There is an error in the call.`
     */
    Message: string;
    /**
     * 返回数据，详情请参见[BeginTransactionResult](~~459816~~)。
     */
    Data: any;
}
