export interface ResubmitTicketResponse {
    /**
     * 数据。
     * @example `无`
     */
    Data: any;
    /**
     * 请求ID。
     * @example `03C67DAD-EB26-41D8-949D-9B0C470FB716`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 错误参数列表。
     */
    Params: string[];
}
