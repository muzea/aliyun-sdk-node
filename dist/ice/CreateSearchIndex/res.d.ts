export interface CreateSearchIndexResponse {
    /**
     * 请求ID。
     * @example `*****ACB-44F2-5F2D-88D7-1283E70*****`
     */
    RequestId: string;
    /**
     * 是否调用成功，取值：
     * - true：调用成功
     * -  false：调用失败
     * @example `true`
     */
    Success: string;
    /**
     * 返回码。
     * @example `200`
     */
    Code: string;
}
