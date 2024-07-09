export interface CreateNacosInstanceResponse {
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
     * 响应信息。
     * @example `请求成功`
     */
    Message: string;
    /**
     * 响应码。
     * @example `200`
     */
    Code: number;
    /**
     * 成功标志。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回结果。
     * @example `ok`
     */
    Data: string;
}
