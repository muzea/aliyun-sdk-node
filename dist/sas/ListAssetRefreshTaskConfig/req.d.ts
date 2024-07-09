export interface ListAssetRefreshTaskConfigRequest {
    /**
     * 云安全中心实例地域。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 配置类型。取值：
     * - **0**：主机刷新任务
     * - **1**：云产品刷新任务
     * - **2**：AK定时校验任务
     * @example `2`
     */
    "RefreshConfigType"?: number;
    /**
     * 查询AK定时校验任务时，指定的AK记录的ID。
     * @example `2295`
     */
    "TargetId"?: number;
}
