export interface GetHistoricalCallerReportResponse {
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `BA03159C-E808-4FF1-B27E-A61B6E888D7F`
     */
    RequestId: string;
    /**
     * 数据。
     */
    Data: {
        /**
         * 最近一次来电时间，格式为Unix时间戳，单位毫秒。
         * @example `1646917200000`
         */
        LastCallingTime: number;
        /**
         * 该号码在查询时间段的总来电次数。
         * @example `10`
         */
        TotalCalls: number;
    };
}
