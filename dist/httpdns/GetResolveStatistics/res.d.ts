export interface GetResolveStatisticsResponse {
    /**
     * 请求ID。
     * @example `50F9C40E-188D-B00B-BE2C-7427E531****`
     */
    RequestId: string;
    DataPoints: {
        /**
         * 数据点。
         */
        DataPoint: {
            /**
             * 解析时间。
             * @example `1488297600`
             */
            Time: number;
            /**
             * 请求数。
             * @example `9703`
             */
            Count: number;
        }[];
    };
}
