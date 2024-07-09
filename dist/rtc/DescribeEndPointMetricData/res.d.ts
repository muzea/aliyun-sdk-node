export interface DescribeEndPointMetricDataResponse {
    /**
     * 订阅端用户指标数据。
     */
    SubMetrics: {
        /**
         * 对应入参Metrics中的类型。
         * @example `VIDEO_STUCK_CAMERA`
         */
        Type: string;
        /**
         * 用户ID。
         * @example `testuserid`
         */
        UserId: string;
        /**
         * 订阅端指标趋势图坐标点列表。
         */
        Nodes: {
            /**
             * 订阅端指标趋势图中x轴横坐标。
             * @example `1548670257`
             */
            X: string;
            /**
             * 订阅端指标趋势图y轴纵坐标。
             * @example `230100`
             */
            Y: string;
            /**
             * 拓展属性。
             */
            Ext: any;
        }[];
    }[];
    /**
     * 发布端用户指标数据。
     */
    PubMetrics: {
        /**
         * 对应入参Metrics中的类型。
         * @example `VIDEO_STUCK_CAMERA`
         */
        Type: string;
        /**
         * 用户ID。
         * @example `testuserid`
         */
        UserId: string;
        /**
         * 坐标点列表。
         */
        Nodes: {
            /**
             * 发布端指标趋势图中x轴横坐标。
             * @example `1548670257`
             */
            X: string;
            /**
             * 发布端指标趋势图中y轴纵坐标。
             * @example `230100`
             */
            Y: string;
            /**
             * 拓展属性。
             */
            Ext: any;
        }[];
    }[];
    /**
     * 请求ID。
     * @example `231470C1-ACFB-4C9F-844F-4CFE1E3804C5`
     */
    RequestId: string;
}
