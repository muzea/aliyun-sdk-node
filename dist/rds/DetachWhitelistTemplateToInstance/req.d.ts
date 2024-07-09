export interface DetachWhitelistTemplateToInstanceRequest {
    /**
     * 白名单模板ID。可通过DescribeAllWhitelistTemplate获取。
     * @example `412`
     */
    "TemplateId": number;
    /**
     * 实例名称。
     * @example `rm-bp191w771k******`
     */
    "InsName": string;
    /**
     * 地域ID。可调用[DescribeRegions](~~610399~~)获取。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 资源组ID。 关于资源组的更多信息，请参见什么是资源组。
     * @example `rg-acfmz3kjr******`
     */
    "ResourceGroupId"?: string;
}
