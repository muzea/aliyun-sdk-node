export interface DeleteNacosServiceResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `9e78a671-4b9b-4dd4-99c1-0b9da87d3dec`
     */
    RequestId: string;
    /**
     * 返回信息。
     * @example `请求成功`
     */
    Message: string;
    /**
     * 响应码。
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
     * 删除结果。
     * @example `ok`
     */
    Data: string;
}
