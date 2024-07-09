export interface QueryAppMetadataResponse {
    /**
     * 请求ID，一次请求的唯一标识。
     * @example `51877BAC-330C-5845-BDFD-C7859AD33FB7`
     */
    RequestId: string;
    /**
     * 返回结构体。
     * @example `{'408d5533': 'SELECT * FROM user_base_info'}`
     */
    Data: any;
    /**
     * 接口状态。
     * - 2XX：成功。
     * - 3XX：重定向。
     * - 4XX：请求错误。
     * - 5XX：服务器错误。
     * @example `200`
     */
    Code: number;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 查询是否成功：
     * - `true`：成功。
     * - `false`：失败。
     * @example `True`
     */
    Success: boolean;
}
