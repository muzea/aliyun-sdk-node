export interface UpdateAutoSqlOptimizeStatusResponse {
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求返回消息。
     * > 请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 设置自动SQL优化功能请求是否执行成功：
         * - **true**：执行成功。
         * - **false**：执行失败。
         * @example `false`
         */
        Success: string;
        /**
         * 错误码：
         * - **-1001**：参数错误。
         * - **-91029**：系统错误。
         * @example `-1001`
         */
        ErrorCode: string;
        /**
         * 错误信息。
         * @example `invalid param`
         */
        ErrorMsg: string;
    };
    /**
     * OpenAPI请求的ID。
     * @example `A52AD37C-35ED-581A-AC23-2232BE54****`
     */
    RequestId: string;
    /**
     * OpenAPI请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: string;
}
