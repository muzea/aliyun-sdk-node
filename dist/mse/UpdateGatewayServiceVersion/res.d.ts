export interface UpdateGatewayServiceVersionResponse {
    /**
     * 请求ID。
     * @example `D6580AA6-E285-58D2-B00B-12C051B3B7BF`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 响应码。
     * @example `1`
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
     * 节点数据。
     * @example `614`
     */
    Data: number;
}
