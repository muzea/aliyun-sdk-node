export interface ModifyMaintenanceActionRequest {
    /**
     * 资源组ID。
     * @example `rg-4690g37929XXXX`
     */
    "ResourceGroupId"?: string;
    /**
     * 目标待处理运维事件的ID。支持输入多个ID来批量修改切换时间，多个ID间用英文逗号（,）隔开。
     * > * 您可以调用[DescribeMaintenanceAction](~~271738~~)接口查看目标待处理运维事件的详情，包括ID。
     * > * 仅待处理运维事件支持修改切换时间，历史运维事件不支持修改切换时间。关于待处理运维事件和历史运维事件的状态详情，请参见[DescribeMaintenanceAction](~~271738~~)。
     * @example `11111`
     */
    "Ids": string;
    /**
     * 后台将在指定时间点执行目标待处理运维事件所对应的操作。格式为`yyyy-MM-ddTHH:mm:ssZ`（UTC时间）。
     * @example `2021-07-09T22:00:00Z`
     */
    "SwitchTime": string;
    /**
     * 目标待处理运维事件所在地域的地域ID。
     * > * 您可以调用[DescribeRegions](~~143074~~)接口查看AnalyticDB MySQL版支持的地域和可用区信息，包括地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
