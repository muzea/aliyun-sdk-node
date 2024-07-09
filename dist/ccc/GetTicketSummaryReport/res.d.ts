export interface GetTicketSummaryReportResponse {
    /**
     * 请求ID。
     * @example `EAF3C248-E123-441B-A545-B6CD02E98EED`
     */
    RequestId: string;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 数据。
     */
    Data: {
        /**
         * 工单创建数量。
         * @example `10`
         */
        TicketsCreated: string;
        /**
         * 工单已处理数量。
         * @example `5`
         */
        TicketsParticipated: string;
        /**
         * 工单待处理数量。
         * @example `3`
         */
        TicketsAssigned: string;
    };
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
}
