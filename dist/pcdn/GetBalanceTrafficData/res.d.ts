export interface GetBalanceTrafficDataResponse {
    /**
     * 业务码，成功返回0。
     * @example `0`
     */
    Code: number;
    /**
     * 请求ID。
     * @example `20963AEE-E3A5-461F-8809-C494558373AB`
     */
    RequestId: string;
    Labels: {
        Label: string[];
    };
    DataList: {
        /**
         * 返回的信息列表。
         */
        UsageData: {
            /**
             * 数据的时间片起始时刻。
             * @example `2017-05-01 00:00:00`
             */
            Date: string;
            Values: {
                Values: string[];
            };
        }[];
    };
}
