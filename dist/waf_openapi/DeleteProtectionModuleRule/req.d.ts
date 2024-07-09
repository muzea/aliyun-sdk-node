export interface DeleteProtectionModuleRuleRequest {
    /**
     * 要删除防护规则的域名。
     * > 您可以调用[DescribeDomainList](~~255880~~)查询所有已接入WAF防护的域名。
     * @example `www.aliyundoc.com`
     */
    "Domain": string;
    /**
     * 要删除的防护规则所属防护功能模块。取值：
     * - **waf-codec**：表示规则防护引擎解码设置。
     * - **tamperproof**：表示网站防篡改规则配置。
     * - **dlp**：表示防敏感信息泄漏规则配置。
     * - **ng_account**：表示账户安全规则配置。
     * - **antifraud**：表示数据风控防护请求配置。
     * - **antifraud_js**：表示数据风控JS插入页面配置。
     * - **bot_algorithm**：表示Bot管理的智能算法规则。
     * - **bot_wxbb_pkg**：表示App防护的版本防护规则。
     * - **bot_wxbb**：表示App防护的路径防护规则。
     * - **ac_custom**：表示自定义防护策略规则配置。
     * - **whitelist**：表示白名单规则配置。
     * @example `ac_custom`
     */
    "DefenseType": string;
    /**
     * 要删除的防护规则的ID。
     * > 您可以调用[DescribeProtectionModuleRules](~~100398~~)查询指定防护功能模块下的所有规则ID。
     * @example `42754`
     */
    "RuleId": number;
    /**
     * WAF实例的ID。
     * > 您可以调用[DescribeInstanceInfo](~~140857~~)查询当前WAF实例的ID。
     * @example `waf-cn-mp9153****`
     */
    "InstanceId": string;
    /**
     * WAF实例在资源管理服务中所属的资源组ID。默认为空，即属于默认资源组。
     * 关于资源组的更多信息，请参见[创建资源组](~~94485~~)。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
    /**
     * WAF实例所属地域。取值：
     * - **cn-hangzhou**：表示中国内地。
     * - **ap-southeast-1**：表示非中国内地。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
