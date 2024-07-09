export interface CreateVerifySchemeResponse {
    /**
     * 状态码的描述。
     * @example `请求成功`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `A1E75E69-3049-5FDB-A376-D745837CD2B1`
     */
    RequestId: string;
    /**
     * 结构体。
     */
    GateVerifySchemeDTO: {
        /**
         * 方案号。
         * @example `FC10001287****`
         */
        SchemeCode: string;
    };
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[服务端API返回码](~~85198~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 请求是否成功。
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
}
