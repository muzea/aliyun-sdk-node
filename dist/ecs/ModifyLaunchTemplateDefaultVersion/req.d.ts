export interface ModifyLaunchTemplateDefaultVersionRequest {
    /**
     * 模板所属的地域ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 启动模板ID。您必须指定LaunchTemplateId或LaunchTemplateName以确定模板。
     * @example `lt-s-bp177juajht6****`
     */
    "LaunchTemplateId"?: string;
    /**
     * 启动模板名称。您必须指定LaunchTemplateId或LaunchTemplateName以确定模板。
     * @example `testLaunchTemplateName`
     */
    "LaunchTemplateName"?: string;
    /**
     * 设置为默认版本的启动模板版本号。
     * @example `2`
     */
    "DefaultVersionNumber": number;
}
