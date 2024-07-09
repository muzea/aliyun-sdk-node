export interface DescribeChannelUserMetricsResponse {
    /**
     * 指标数据列表。
     */
    MetricDatas: {
        /**
         * 指标类型。取值：
         * - **ALL_NUM**：单位时间内的用户数量。
         * - **PUB_NUM**：单位时间内发布端的用户数量。
         * - **SUB_NUM**：单位时间内订阅端的用户数量。
         * - **JOIN_FAIL_NUM**：单位时间内加入频道异常的用户数量。
         * - **BAD_EXP_NUM**：单位时间内通信体验异常的用户数量。
         * @example `ALL_NUM`
         */
        Type: string;
        /**
         * 指标趋势图坐标点列表。
         */
        Nodes: {
            /**
             * 指标趋势图中x轴横坐标。
             * @example `1612418625`
             */
            X: string;
            /**
             * 指标趋势图中y轴纵坐标。
             * @example `123`
             */
            Y: string;
            /**
             * 拓展属性。
             */
            Ext: any;
        }[];
    }[];
    /**
     * 总览数据。
     */
    OverallData: {
        /**
         * 累计用户数量。
         * @example `5`
         */
        TotalUserNum: number;
        /**
         * 累计发布端用户数量。
         * @example `1`
         */
        TotalPubUserNum: number;
        /**
         * 累计订阅端用户数量。
         * @example `3`
         */
        TotalSubUserNum: number;
        /**
         * 累计加入频道异常用户数量。
         * @example `0`
         */
        TotalJoinFailNum: number;
        /**
         * 累计通信体验异常用户数量。
         * @example `0`
         */
        TotalBadExpNum: number;
    };
    /**
     * 请求ID。
     * @example `231470C1-ACFB-4C9F-844F-4CFE1E3804C5`
     */
    RequestId: string;
}
