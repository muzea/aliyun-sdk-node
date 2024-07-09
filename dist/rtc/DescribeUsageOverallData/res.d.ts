export interface DescribeUsageOverallDataResponse {
    /**
     * 用量概览数据列表。
     */
    UsageOverallData: {
        /**
         * 查询的指标类型。
         * @example `ONLINE_USER_PEAK`
         */
        Type: string;
        /**
         * 指标趋势图坐标点列表。
         */
        Nodes: {
            /**
             * 指标趋势图中x轴横坐标。
             * @example `1615824000`
             */
            X: string;
            /**
             * 指标趋势图中y轴纵坐标。
             * @example `1`
             */
            Y: string;
        }[];
    }[];
    /**
     * 请求ID。
     * @example `231470C1-ACFB-4C9F-844F-4CFE1E3804C5`
     */
    RequestId: string;
}
