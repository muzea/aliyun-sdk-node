export interface ModifyPendingMaintenanceActionRequest {
    /**
     * 地域ID。
     * >您可以通过接口[DescribeRegions](~~98041~~)查看地域ID详情。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 目标任务ID，您也可以同时输入多个任务ID，统一修改这些任务的切换时间，多个任务ID间用英文逗号（,）隔开。
     * @example `111111`
     */
    "Ids": string;
    /**
     * 后台将在指定时间点执行目标待处理任务所对应的操作。格式为`yyyy-MM-ddTHH:mm:ssZ`（UTC时间）。
     * @example `2020-06-09T22:00:00Z`
     */
    "SwitchTime": string;
    /**
     * 资源组ID。
     * @example `rg-************`
     */
    "ResourceGroupId"?: string;
}
