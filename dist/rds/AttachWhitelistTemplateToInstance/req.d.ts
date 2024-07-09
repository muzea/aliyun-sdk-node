export interface AttachWhitelistTemplateToInstanceRequest {
    /**
     * 白名单模板ID。可通过DescribeAllWhitelistTemplate获取。
     * @example `412`
     */
    "TemplateId": number;
    /**
     * 实例名称。
     * @example `rm-bp191w771kd3****`
     */
    "InsName": string;
    /**
     * 地域ID。可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 资源组ID。 关于资源组的更多信息，请参见什么是资源组。
     * @example `rg-acfmy*****`
     */
    "ResourceGroupId"?: string;
}
