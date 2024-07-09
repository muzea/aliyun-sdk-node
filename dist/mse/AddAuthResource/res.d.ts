export interface AddAuthResourceResponse {
    /**
     * 请求ID。
     * @example `4BBCF560-4DD7-5DBD-B849-CCB135BBBAB7`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `403`
     */
    HttpStatusCode: number;
    /**
     * 错误信息。
     * @example `You are not authorized to perform this operation.`
     */
    Message: string;
    /**
     * 状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 数据结构。
     * @example `24`
     */
    Data: number;
}
