export interface UpdateMessageQueueRouteResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 本次请求的ID。
     * @example `E3919C62-876A-5926-A0BC-18351A24FA35`
     */
    RequestId: string;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 节点数据。
     * @example `True`
     */
    Data: string;
    /**
     * 状态码。状态码为200表示成功，其余取值表示失败。
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
}
