export interface ListOutboundNumbersOfUserResponse {
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
     * @example `EEEE671A-3E24-4A04-81E6-6C4F5B39DF75`
     */
    RequestId: string;
    /**
     * 数据。
     */
    Data: {
        /**
         * 分页序号，范围1-100。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 分页大小，范围1-100。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总数。
         * @example `1`
         */
        TotalCount: number;
        /**
         * 号码列表。
         */
        List: {
            /**
             * 号码。
             * @example `0830019****`
             */
            Number: string;
            /**
             * 号码归属地市。
             * @example `乐山`
             */
            City: string;
            /**
             * 号码归属地省。
             * @example `四川`
             */
            Province: string;
        }[];
    };
}
