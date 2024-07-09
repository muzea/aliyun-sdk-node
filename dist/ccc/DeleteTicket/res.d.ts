export interface DeleteTicketResponse {
    /**
     * 响应数据。
     * @example `无`
     */
    Data: any;
    /**
     * 请求ID。
     * @example `2263B273-AC1B-44EB-BA98-87F2322C6780`
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
