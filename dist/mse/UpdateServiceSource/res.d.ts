export interface UpdateServiceSourceResponse {
    /**
     * 请求ID。
     * @example `6AB2B0B6-4A86-54E2-A340-FC47A22EE659`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求结果，取值如下。
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     * @example `63`
     */
    Data: number;
}
