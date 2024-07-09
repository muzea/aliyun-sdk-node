export interface DescribeMonitoringAgentStatusesRequest {
    /**
     * 实例ID。多个实例ID之间用半角逗号（,）分隔。
     * @example `i-hp3dunahluwajv6f****`
     */
    "InstanceIds"?: string;
    /**
     * 可用性监控的任务ID。
     * @example `126****`
     */
    "HostAvailabilityTaskId"?: string;
}
