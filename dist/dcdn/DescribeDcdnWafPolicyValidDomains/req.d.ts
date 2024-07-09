export interface DescribeDcdnWafPolicyValidDomainsRequest {
    /**
     * WAF防护策略类型，目前支持以下场景：
     * - waf_group：Web基础防护
     * - custom_acl：自定义防护策略
     * - whitelist：白名单
     * - ip_blacklist：IP黑名单。
     * - region_block：区域封禁。
     * - bot：Bot管理。
     * @example `custom_acl`
     */
    "DefenseScene": string;
    /**
     * 防护域名，支持模糊查询。
     * @example `example.com`
     */
    "DomainNameLike"?: string;
    /**
     * 页码。取值范围为：**1**~**100000**。默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的域名个数，默认值**20**，取值范围：**1**~**500**之间的任意整数。
     * @example `20`
     */
    "PageSize"?: number;
}
