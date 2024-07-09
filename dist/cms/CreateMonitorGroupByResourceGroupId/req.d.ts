export interface CreateMonitorGroupByResourceGroupIdRequest {
    /**
     * 应用分组是否开启自动订阅事件通知。当应用分组内资源发生严重和警告级别的事件时，云监控发送报警通知。取值：
     * - true：开启。
     * - false（默认值）：关闭。
     * @example `true`
     */
    "EnableSubscribeEvent"?: boolean;
    /**
     * 应用分组是否开启自动安装云监控插件。云监控自动为应用分组内的主机安装云监控插件。取值：
     * - true：开启。
     * - false（默认值）：关闭。
     * @example `true`
     */
    "EnableInstallAgent"?: boolean;
    /**
     * 资源组对应的地域ID。
     * 关于如何获取资源组对应的地域ID，请参见[GetResourceGroup](~~158866~~)。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源组ID。
     * 关于如何获取资源组ID，请参见[ListResourceGroups](~~158855~~)。
     * @example `rg-acfmw3ty5y7****`
     */
    "ResourceGroupId": string;
    /**
     * 资源组名称。
     * 关于如何获取资源组名称，请参见[ListResourceGroups](~~158855~~)。
     * @example `CloudMonitor`
     */
    "ResourceGroupName": string;
    /**
     * 报警联系组。应用分组的报警通知会发送给该报警联系组中的报警联系人。
     * 报警联系组是一组报警联系人，可以包含一个或多个报警联系人。关于如何创建报警联系人和报警联系组，请参见[PutContact](~~114923~~)和[PutContactGroup](~~114929~~)。关于如何获取报警联系组，请参见[DescribeContactGroupList](~~114922~~)。
     * @example `ECS_Group`
     */
    "ContactGroupList": string[];
}
