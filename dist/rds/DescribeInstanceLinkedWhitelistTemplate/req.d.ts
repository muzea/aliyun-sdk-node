export interface DescribeInstanceLinkedWhitelistTemplateRequest {
    /**
     * 实例名称。
     * @example `rm-bp191w771k******`
     */
    "InsName": string;
    /**
     * 地域ID，您可以通过[DescribeRegions](~~26243~~)接口查询。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 资源组ID，可以为空。
     * @example `rg-aek3dbzqb******`
     */
    "ResourceGroupId"?: string;
}
