export interface DescribePendingMaintenanceActionsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 是否返回历史任务，取值范围如下：
     * * **0**：返回当前任务
     * * **1**：返回历史任务
     * 默认取值为**0**。
     * @example `1`
     */
    "IsHistory"?: number;
    /**
     * 资源组ID。
     * @example `rg-************`
     */
    "ResourceGroupId"?: string;
}
