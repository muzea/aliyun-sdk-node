export interface DescribeCloudGtmSummaryResponse {
    /**
     * 唯一请求识别码。
     * @example `199C3699-9A7B-41A1-BB5A-F1E862D3CB38`
     */
    RequestId: string;
    /**
     * 当前账户下实例总数。
     * @example `10`
     */
    InstanceTotalCount: number;
    /**
     * 用户已配置的探测任务总数。
     * @example `20`
     */
    MonitorTaskTotalQuota: number;
    /**
     * 用户探测任务数配额。
     * @example `101`
     */
    MonitorTaskTotalCount: number;
}
