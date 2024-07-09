export interface AddTicketTaskResponse {
    /**
     * 数据。
     * @example `无`
     */
    Data: any;
    /**
     * 请求ID。
     * @example `B06B3244-1B44-481B-90C4-F2F92E59D6B5`
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
