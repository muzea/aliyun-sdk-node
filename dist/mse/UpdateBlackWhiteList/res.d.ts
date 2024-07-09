export interface UpdateBlackWhiteListResponse {
    /**
     * 请求ID。
     * @example `AD5DEDA0-C82A-50D9-AF54-BD3576CCFB4C`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求消息
     * @example `You are not authorized to perform this operation.`
     */
    Message: string;
    /**
     * 返回值。
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
     * 记录ID。
     * @example `13`
     */
    Data: number;
}
