export interface BatchExecuteStatementResponse {
    /**
     * 请求ID。
     * @example `CDAEE474-87E5-5AE3-A534-922F90D5867D`
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
     * > 请求成功时该参数返回为空。
     * @example `There is an error in the call.`
     */
    Message: string;
    /**
     * 请求返回数据，详情请参见[BatchExecuteStatementResult](~~459817~~)。
     */
    Data: any;
}
