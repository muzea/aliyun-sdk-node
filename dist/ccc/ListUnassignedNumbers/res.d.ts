export interface ListUnassignedNumbersResponse {
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
     * @example `BA03159C-E808-4FF1-B27E-A61B6E888D7F	`
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
         * @example `3`
         */
        TotalCount: number;
        /**
         * 号码列表。
         */
        List: {
            /**
             * 号码。
             * @example `08330011****`
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
