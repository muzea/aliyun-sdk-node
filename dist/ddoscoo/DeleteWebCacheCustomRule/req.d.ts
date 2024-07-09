export interface DeleteWebCacheCustomRuleRequest {
    /**
     * DDoS高防实例在资源管理服务中所属的资源组ID。
     * 不设置该参数表示默认资源组。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
    /**
     * 要删除静态页面缓存自定义规则的域名。
     * > 您可以调用[DescribeDomains](~~91724~~)查询所有已接入DDoS高防防护的域名。
     * @example `www.aliyundoc.com`
     */
    "Domain": string;
    /**
     * 要删除的规则的名称列表。
     * @example `test`
     */
    "RuleNames": string[];
}
