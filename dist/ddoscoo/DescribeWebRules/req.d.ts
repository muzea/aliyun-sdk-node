export interface DescribeWebRulesRequest {
    /**
     * DDoS高防实例在资源管理服务中所属的资源组ID。
     * 不设置该参数表示默认资源组。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
    /**
     * 要查询的网站域名。
     * > 域名必须已经配置过网站业务转发规则。您可以调用[DescribeDomains](~~91724~~)查询所有已经配置过网站业务转发规则的域名。
     * @example `example.com`
     */
    "Domain"?: string;
    /**
     * 要查询的CNAME地址。
     * @example `kzmk7b8tt351****.aliyunddos1014****`
     */
    "Cname"?: string;
    /**
     * 查询匹配模式。取值：
     * - **fuzzy**（默认）：表示模糊查询。
     * - **exact**：表示精确查询。
     * @example `exact`
     */
    "QueryDomainPattern"?: string;
    /**
     * 分页查询时，设置当前页面的页码。默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时，设置每页包含转发规则的数量。取值范围：**1**~**10**。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 要查询的DDoS高防实例的ID列表。
     * @example `ddoscoo-cn-mp91j1ao****`
     */
    "InstanceIds"?: string[];
}
