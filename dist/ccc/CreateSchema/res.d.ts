export interface CreateSchemaResponse {
    /**
     * 数据。
     * @example `1ca2b084-6f0a-454b-9851-29768a9a5832`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `9F766284-F103-4298-8EC5-19F9F9BE5522`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应码
     * @example `OK`
     */
    Code: string;
    /**
     * 响应信息
     * @example `无`
     */
    Message: string;
    /**
     * 响应参数。
     */
    Params: string[];
}
