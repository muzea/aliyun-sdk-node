export interface RejectTicketResponse {
    /**
     * 数据。
     * @example `无`
     */
    Data: any;
    /**
     * 请求ID。
     * @example `678F7002-CA01-4ABF-A112-585AFBDF3A3B`
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
     * 错误信息。
     * @example `无`
     */
    Message: string;
    /**
     * 错误参数列表。
     */
    Params: string[];
}
