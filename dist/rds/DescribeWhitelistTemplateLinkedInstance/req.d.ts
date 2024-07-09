export interface DescribeWhitelistTemplateLinkedInstanceRequest {
    /**
     * 白名单模板ID。可通过DescribeAllWhitelistTemplate获取。
     * @example `412`
     */
    "TemplateId": number;
    /**
     * 地域ID。可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 资源组ID，可以为空。
     * @example `rg-acfmy*****`
     */
    "ResourceGroupId"?: string;
}
