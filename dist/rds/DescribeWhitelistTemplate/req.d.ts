export interface DescribeWhitelistTemplateRequest {
    /**
     * 白名单模板ID。可通过DescribeAllWhitelistTemplate获取。
     * @example `1012`
     */
    "TemplateId": number;
    /**
     * 资源组ID。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
    /**
     * 地域ID。可以通过接口[DescribeRegions](~~26243~~)查看地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
