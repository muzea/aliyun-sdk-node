export interface DeleteLaunchTemplateVersionRequest {
    /**
     * 模板所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 待删除的模板版本号。
     * @example `2`
     */
    "DeleteVersion": number[];
    /**
     * 需要删除的启动模板ID。更多信息，请参见[DescribeLaunchTemplates](~~73759~~)。
     * @example `lt-bp1apo0bbbkuy0rj****`
     */
    "LaunchTemplateId"?: string;
    /**
     * 启动模板名称。
     * @example `testLaunchTemplateName`
     */
    "LaunchTemplateName"?: string;
}
