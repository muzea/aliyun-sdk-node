export interface GetResourceGroupStatisticsRequest {
    /**
     * 工作空间ID列表，多个ID间使用半角逗号（,）分隔。如何获取工作空间ID，请参见 [ListWorkspaces](~~449124~~)。
     * @example `27218,34956`
     */
    "WorkspaceIds": string;
    /**
     * 资源组ID，唯一标识客户的资源组（机器组）。
     * @example `rg-123456789`
     */
    "ResourceId": string;
    /**
     * 统计开始时间。
     * @example `2020-11-08T15:00:00Z`
     */
    "StartTime": string;
    /**
     * 统计结束时间。
     * @example `2020-11-08T15:00:00Z`
     */
    "EndTime": string;
}
