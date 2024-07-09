export interface CreateImageOrderResponse {
    /**
     * 请求ID。
     * @example `FF882F7C-BF8D-5DCC-9F63-93A5BA36FD9F`
     */
    RequestId: string;
    /**
     * errorMsg
     * @example `{&quot;ErrMsg&quot;:&quot;Right angle correction failed!&quot;,&quot;ErrCode&quot;:&quot;5002&quot;}`
     */
    ErrorMsg: string;
    /**
     * 错误码
     * @example `0`
     */
    ErrorCode: string;
    /**
     * 工单 Id。
     * @example `216992253670473`
     */
    OrderId: string;
    /**
     * 表示是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `True`
     */
    Success: boolean;
}
