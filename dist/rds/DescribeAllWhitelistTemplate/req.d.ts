export interface DescribeAllWhitelistTemplateRequest {
    /**
     * 每页记录数。合法的枚举值为：10、30、50。
     * @example `10`
     */
    "MaxRecordsPerPage": number;
    /**
     * 当前页码。
     * @example `1`
     */
    "PageNumbers": number;
    /**
     * 地域ID，您可以通过[DescribeRegions](~~26243~~)接口查询。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 白名单模板名称。模糊查询时传入，支持模糊查询模板名称。可通过DescribeWhitelistTemplate获取。
     * @example `template`
     */
    "TemplateName"?: string;
    /**
     * 是否开启模糊查询，各取值含义如下：
     * - **true**：开启
     * - **false**：不开启
     * @example `true`
     */
    "FuzzySearch"?: boolean;
    /**
     * 资源组ID。 关于资源组的更多信息，请参见什么是资源组。
     * @example `rg-acfmyhigx******`
     */
    "ResourceGroupId"?: string;
}
