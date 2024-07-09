export interface CreateNacosServiceResponse {
    /**
     * 请求ID。
     * @example `5B170A0D-2C5D-4CF8-B808-03966B86****`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 节点数据。
     * @example `data`
     */
    Data: string;
    /**
     * 响应码。
     * @example `200`
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
