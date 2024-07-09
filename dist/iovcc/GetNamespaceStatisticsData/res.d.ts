export interface GetNamespaceStatisticsDataResponse {
    /**
     * 请求ID
     * @example `E94C9864-56FB-44AD-AC0C-A1CEFB332254`
     */
    RequestId: string;
    /**
     * 统计结果
     */
    Statistics: {
        Categories: number[];
        /**
         * 统计数据
         */
        Series: {
            Data: number[];
            /**
             * 统计数据的名称。
             * @example `设备访问次数`
             */
            Name: string;
        }[];
    };
}
