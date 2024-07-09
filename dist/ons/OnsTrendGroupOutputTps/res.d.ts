export interface OnsTrendGroupOutputTpsResponse {
    /**
     * 公共参数，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `CE57AEDC-8FD2-43ED-8E3B-1F878077****`
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
                 * @example `1570867800000`
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
         * 纵轴单位。统计的消息消费数量msg，或者统计的消息消费TPS msg/min。
         * @example `msg`
         */
        YUnit: string;
        /**
         * Table的名称。
         * @example `TopicXXX@GID_XXXReceive Trend Chart`
         */
        Title: string;
    };
}
