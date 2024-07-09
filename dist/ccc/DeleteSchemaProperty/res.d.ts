export interface DeleteSchemaPropertyResponse {
    /**
     * 请求ID
     * @example `7BEEA660-A45A-45E3-98CC-AFC65E715C23`
     */
    RequestId: string;
    /**
     * HTTP状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应码
     * @example `OK`
     */
    Code: string;
    /**
     * 错误说明
     * @example `User 244715989906081477 does not exist in instance worldfirst01.`
     */
    Message: string;
    /**
     * 错误参数信息
     */
    Params: string[];
}
