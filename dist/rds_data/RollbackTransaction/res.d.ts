export interface RollbackTransactionResponse {
    /**
     * 请求ID。
     * @example `D2FEE6D7-DCA6-57B4-946A-9E670B773518`
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
     * 返回数据，详情请参见[RollbackTransactionResult](~~459815~~)。
     */
    Data: any;
}
