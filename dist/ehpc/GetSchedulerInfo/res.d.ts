export interface GetSchedulerInfoResponse {
    /**
     * 请求ID。
     * @example `BBC2F93D-003A-49C4-850C-B826EECF****`
     */
    RequestId: string;
    /**
     * 调度器配置信息。
     */
    SchedInfo: {
        /**
         * 调度器详细配置信息。
         * @example `{"AclInfo":[{"AclEnable":false,"UntrackUser":[],"User":[],"QueueName":"workq"}],"JobHistory":"","SchedIteration":"60","QueueResource":[{"UntrackUser":[],"User":[],"QueueName":"workq"}]}`
         */
        Configuration: string;
        /**
         * 调度器名称。
         * @example `pbs`
         */
        SchedName: string;
    }[];
}
