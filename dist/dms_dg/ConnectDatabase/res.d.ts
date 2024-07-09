export interface ConnectDatabaseResponse {
    /**
     * 响应码。
     * @example `200`
     */
    Code: string;
    /**
     * 返回结果。
     * @example `OK`
     */
    Data: string;
    /**
     * 报错信息。
     * @example `Gateway exception, please launch local dg first`
     */
    ErrorMsg: string;
    /**
     * 请求ID，用于定位日志，排查问题。
     * @example `F4EFCDC5-E69C-5A6F-B170-C5379D9D6811`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
}
