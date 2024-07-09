export interface ListCloudMetricProfilingsResponse {
    /**
     * 本页条数。
     * @example `1`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `9A05F620-ED46-4A57-95F1-C67D6D3C5DD2`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 列表条目总数。
     * @example `1`
     */
    TotalCount: number;
    Profilings: {
        /**
         * 历史性能剖析信息。
         */
        ProfilingInfo: {
            /**
             * 剖析ID。
             * @example `ehpc-hz-i-bplukzqgl****_21687_2019-09-09-02-37-40`
             */
            ProfilingId: string;
            /**
             * 触发时间。
             * @example `2019-09-09 02:37:40`
             */
            TriggerTime: string;
            /**
             * 进程ID。
             * @example `21687`
             */
            Pid: number;
            /**
             * 实例机器名称。
             * @example `compute5`
             */
            HostName: string;
            /**
             * 采集时长。单位：秒
             * 可能值：10~300
             * @example `30`
             */
            Duration: number;
            /**
             * 实例ID。
             * @example `i-bp1j76z8dlukzqgl0****`
             */
            InstanceId: string;
            /**
             * 采集频率。单位：Hz
             * 可能值：1~2000
             * @example `2000`
             */
            Freq: number;
        }[];
    };
}
