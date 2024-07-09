export interface UpdateNacosServiceResponse {
    /**
     * 请求ID。
     * @example `4E9FDCFE-0738-493B-B801-82BDFBCB****`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 数据概览。
     * @example `6`
     */
    Data: string;
    /**
     * 响应码。
     * @example `1`
     */
    Code: number;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `True`
     */
    Success: boolean;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
}
