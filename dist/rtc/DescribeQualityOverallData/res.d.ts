export interface DescribeQualityOverallDataResponse {
    /**
     * 概览数据列表。
     */
    QualityOverallData: {
        /**
         * 查询的指标类型。
         * @example `JOIN_CHANNEL_SUC_RATE`
         */
        Type: string;
        /**
         * 指标趋势图坐标点列表。
         */
        Nodes: {
            /**
             * 指标趋势图中x轴横坐标。
             * @example `1615831200`
             */
            X: string;
            /**
             * 指标趋势图中y轴纵坐标。
             * @example `1.0000`
             */
            Y: string;
        }[];
        /**
         * 该指标的平均值。
         * @example `0.9376`
         */
        Average: string;
    }[];
    /**
     * 请求ID。
     * @example `231470C1-ACFB-4C9F-844F-4CFE1E3804C5`
     */
    RequestId: string;
}
