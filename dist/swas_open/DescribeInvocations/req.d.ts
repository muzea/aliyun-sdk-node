export interface DescribeInvocationsRequest {
    /**
     * 地域ID。您可以调用[ListRegions](~~189315~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 轻量应用服务器的实例ID。
     * @example `3a658ca270df4df39f22e289b338****`
     */
    "InstanceId": string;
    /**
     * 当前页码。
     * 起始值：1。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。
     * 最大值：50。
     *  默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 命令运行状态。可能值：
     * - Running：命令运行中。
     * - Finished：命令执行完成
     * - Failed：命令运行失败。
     * @example `Finished`
     */
    "InvokeStatus"?: string;
}
