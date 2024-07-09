export interface DescribeGroupMonitoringAgentProcessRequest {
    /**
     * 应用分组ID。
     * @example `12345`
     */
    "GroupId": string;
    /**
     * 进程名称。
     * @example `sshd`
     */
    "ProcessName"?: string;
    /**
     * 分页页码。默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小。默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
}
