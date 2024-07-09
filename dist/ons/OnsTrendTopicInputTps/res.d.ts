export interface OnsTrendTopicInputTpsResponse {
    /**
     * 公共参数，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `E213AD8A-0730-4B3D-A35A-340DA47D****`
     */
    RequestId: string;
    /**
     * 数据集合。
     */
    Data: {
        Records: {
            /**
             * 采集点信息。
             */
            StatsDataDo: {
                /**
                 * 纵轴，数据（TPS或者总量）。
                 * @example `0`
                 */
                Y: number;
                /**
                 * 横轴，时间戳，单位：毫秒。
                 * @example `1570852800000`
                 */
                X: number;
            }[];
        };
        /**
         * 横轴单位。统计时间：ms。
         * @example `ms`
         */
        XUnit: string;
        /**
         * 纵轴单位。统计的消息生产数量msg，或者统计的消息生产TPS msg/min。
         * @example `msg`
         */
        YUnit: string;
        /**
         * Table的名称。
         * @example `TopicXXX  Send Trend Chart`
         */
        Title: string;
    };
}
