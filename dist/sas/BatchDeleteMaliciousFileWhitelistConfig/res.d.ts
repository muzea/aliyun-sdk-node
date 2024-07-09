export interface BatchDeleteMaliciousFileWhitelistConfigResponse {
    /**
     * 接口调用是否成功。取值：
     * - **true**：接口调用成功。
     * - **false**：接口调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 请求结果返回附加消息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID。
     * @example `A3D7C47D-3F11-57BB-90E8-E5C20C61****`
     */
    RequestId: string;
    /**
     * 请求状态码，返回200代表请求成功。
     * @example `200`
     */
    HttpStatusCode: number;
}
