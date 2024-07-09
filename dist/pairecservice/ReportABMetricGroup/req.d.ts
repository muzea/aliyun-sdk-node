export interface ReportABMetricGroupRequest {
    /**
     * 指标组ID。
     * @example `1`
     */
    "ABMetricGroupId": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 实例ID，可通过接口[ListInstances](~~2411819~~)获取。
         * @example `pairec-cn-test1`
         */
        InstanceId: string;
        /**
         * 报表类型。
         * - Realtime-实时报表
         * - Offline-离线报表
         * - Market-大盘报表
         * @example `Offline`
         */
        ReportType: string;
        /**
         * 场景ID，可通过[ListScenes](~~2402581~~)获取。
         * @example `1`
         */
        SceneId: string;
        /**
         * 实验组ID，可通过接口[ListExperimentGroups](~~2402573~~)获取（离线、实时报表需要）。
         * @example `3`
         */
        ExperimentGroupId: string;
        /**
         * 实验ID列表，可通过[ListExperiments](~~2402582~~)获取。
         * @example `3,4,5`
         */
        ExperimentIds: string;
        /**
         * 基准实验ID。
         * @example `3`
         */
        BaseExperimentId: string;
        /**
         * 统计时间类型（实时报表需要）。
         * - Hour-按小时统计。
         * - Day-从当日0点开始累加。
         * @example `Hour`
         */
        TimeStatisticsMethod: string;
        /**
         * 维度字段。
         * @example `{"gender":"man"}`
         */
        DimensionFields: string;
        /**
         * 开始日期。
         * @example `2021-07-01`
         */
        StartDate: string;
        /**
         * 结束日期。
         * @example `2021-07-01`
         */
        EndDate: string;
    };
}
