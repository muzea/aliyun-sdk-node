export interface DeleteLaunchTemplateRequest {
    /**
     * 实例启动模板所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 启动模板ID。更多信息，请参见[DescribeLaunchTemplates](~~73759~~)。
     * 您必须指定 `LaunchTemplateId` 或 `LaunchTemplateName` 以确定启动模板。
     * @example `lt-bp1apo0bbbkuy0rj****`
     */
    "LaunchTemplateId"?: string;
    /**
     * 启动模板名称。
     * 您必须指定`LaunchTemplateId`或`LaunchTemplateName`以确定启动模板。
     * @example `testLaunchTemplateName`
     */
    "LaunchTemplateName"?: string;
}
