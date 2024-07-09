export interface WithdrawTicketResponse {
    /**
     * 数据。
     * @example `无`
     */
    Data: any;
    /**
     * 请求ID。
     * @example `2778FA12-EDD6-42AA-9B15-AF855072E5E5`
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
