export interface PickOutboundNumbersResponse {
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
         * 被叫号码。
         */
        Callee: {
            /**
             * 号码
             * @example `1388888****`
             */
            Number: string;
            /**
             * 号码归属地市。
             * @example `北京`
             */
            City: string;
            /**
             * 号码归属地省。
             * @example `北京`
             */
            Province: string;
        };
        /**
         * 主叫号码。
         */
        Caller: {
            /**
             * 号码
             * @example `0108989****`
             */
            Number: string;
            /**
             * 号码归属地市。
             * @example `北京`
             */
            City: string;
            /**
             * 号码归属地省。
             * @example `北京`
             */
            Province: string;
        };
    }[];
}
