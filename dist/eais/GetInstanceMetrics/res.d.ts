export interface GetInstanceMetricsResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
    /**
     * EAIS实例ID。
     * @example `eais-bj8b53it29hfhj******`
     */
    InstanceId: string;
    /**
     * Pod指标列表。
     */
    PodMetrics: {
        /**
         * Pod ID。
         * @example `eais-hznzre6ffmz9num4****-579b587ddf-9txr6`
         */
        PodId: string;
        /**
         * 指标数据列表。
         */
        Metrics: {
            /**
             * 时间戳。单位：毫秒。
             * @example `1669107528450`
             */
            Time: string;
            /**
             * 利用率百分比。取值在0~100之间。
             * @example `4.536552540058814`
             */
            Value: string;
        }[];
    }[];
}
