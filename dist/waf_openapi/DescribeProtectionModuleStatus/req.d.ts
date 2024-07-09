export interface DescribeProtectionModuleStatusRequest {
    /**
     * 要查询的网站域名。
     * > 您可以调用[DescribeDomainList](~~255880~~)查询所有已接入WAF防护的域名。
     * @example `www.aliyundoc.com`
     */
    "Domain": string;
    /**
     * 要查询的WAF防护功能模块。取值：
     * - **waf**：表示规则防护引擎。
     * - **dld**：表示深度学习引擎。
     * - **tamperproof**：表示网站防篡改。
     * - **dlp**：表示防敏感信息泄漏。
     * - **normalized**：表示主动防御。
     * - **bot_crawler**：表示合法爬虫。
     * - **bot_intelligence**：表示爬虫威胁情报。
     * - **antifraud**：表示数据风控。
     * - **bot_algorithm**：表示智能算法。
     * - **bot_wxbb**：表示App防护。
     * - **bot_wxbb_pkg**：表示App防护中的版本防护。
     * - **ac_cc**：表示CC安全防护。
     * - **ac_blacklist**：表示IP黑名单。
     * - **ac_highfreq**：表示扫描防护中的高频Web攻击封禁。
     * - **ac_dirscan**：表示扫描防护中的目录遍历防护。
     * - **ac_scantools**：表示扫描防护中的扫描工具封禁。
     * - **ac_collaborative**：表示扫描防护中的协同防御。
     * - **ac_custom**：表示自定义防护策略。
     * > 只支持设置一个功能模块。
     * @example `waf`
     */
    "DefenseType": string;
    /**
     * 要查询的WAF实例的ID。
     * > 您可以调用[DescribeInstanceInfo](~~140857~~)查询当前WAF实例的ID。
     * @example `waf-cn-zz11sr5****`
     */
    "InstanceId": string;
    /**
     * WAF实例在资源管理服务中所属的资源组ID。默认为空，即属于默认资源组。
     * 关于资源组的更多信息，请参见[创建资源组](~~94485~~)。
     * @example `rg-aek2hw7****ftqi`
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
