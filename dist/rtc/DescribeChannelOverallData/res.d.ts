export interface DescribeChannelOverallDataResponse {
    /**
     * 指标数据列表。
     */
    MetricDatas: {
        /**
         * 指标类型。取值：
         * - **CALL_QUALITY**：通信质量。
         * - **CONN_NUM**：加入频道成功用时的区间分布。
         * @example `CALL_QUALITY`
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
             * 扩展数据。
             */
            Ext: any;
        }[];
    }[];
    /**
     * 概览数据。
     */
    OverallData: {
        /**
         * 平均通信连接的用时，单位：秒。
         * @example `0.5`
         */
        ConnAvgTime: number;
        /**
         * 5秒内连通成功率，用小数表示，例如1.0表示连通成功率为100%。
         * @example `0.91`
         */
        FiveSecJoinRate: number;
        /**
         * 整体音频卡顿率，用小数表示，例如0.02表示音频卡顿率为2%。
         * @example `0.02`
         */
        TotalAudioStuckRate: number;
        /**
         * 整体视频卡顿率，用小数表示，例如0.02表示视频卡顿率为2%。
         * @example `0.02`
         */
        TotalVideoStuckRate: number;
        /**
         * 整体视频模糊率，用小数表示，例如0.02表示视频模糊率为2%。
         * @example `0.02`
         */
        TotalVideoVagueRate: number;
    };
    /**
     * 通信基本信息。
     */
    CallInfo: {
        /**
         * 应用ID。
         * @example `testappid`
         */
        AppId: string;
        /**
         * 频道ID。
         * @example `testid`
         */
        ChannelId: string;
        /**
         * 通信状态。取值：
         * - **IN**：进行中。
         * - **OUT**：已结束。
         * @example `IN`
         */
        CallStatus: string;
        /**
         * 创建频道的时间戳，使用UNIX时间戳表示，单位：秒。
         * @example `1615860711`
         */
        CreatedTs: number;
        /**
         * 释放频道的时间戳，使用UNIX时间戳表示，单位：秒。
         * @example `1615860811`
         */
        DestroyedTs: number;
        /**
         * 频道时长，单位：秒。
         * @example `100`
         */
        Duration: number;
    };
    /**
     * 请求ID。
     * @example `231470C1-ACFB-4C9F-844F-4CFE1E3804C5`
     */
    RequestId: string;
}
