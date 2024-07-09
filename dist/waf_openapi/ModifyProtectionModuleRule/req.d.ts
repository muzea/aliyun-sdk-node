export interface ModifyProtectionModuleRuleRequest {
    /**
     * 要修改规则配置的域名。
     * > 您可以调用[DescribeDomainNames](~~86373~~)查询所有已添加到WAF进行防护的域名。
     * @example `www.example.com`
     */
    "Domain": string;
    /**
     * 要修改的规则配置所属防护功能模块。取值：
     * - **tamperproof**：表示配置网站防篡改规则。
     * - **dlp**：表示配置防敏感信息泄漏规则。
     * - **ng_account**：表示配置账户安全规则。
     * - **bot_intelligence**：表示配置爬虫威胁情报。
     * - **antifraud**：表示配置数据风控防护请求。
     * - **antifraud_js**：表示配置数据风控JS插入页面。
     * - **bot_algorithm**：表示配置Bot管理的智能算法规则。
     * - **bot_wxbb_pkg**：表示配置App防护的版本防护规则。
     * - **bot_wxbb**：表示配置App防护的路径防护规则。
     * - **ac_blacklist**：表示配置IP黑名单规则。
     * - **ac_highfreq**：表示配置高频Web攻击IP自动封禁规则。
     * - **ac_dirscan**：表示配置目录扫描防护规则。
     * - **ac_custom**：表示配置自定义防护策略规则。
     * - **whitelist**：表示配置白名单规则。
     * @example `ac_custom`
     */
    "DefenseType": string;
    /**
     * 规则配置内容，以一系列参数构造的JSON格式转化成字符串。
     * > 根据所指定的防护功能模块配置（**DefenseType**）不同，具体涉及的参数有所不同。详细信息，请参见Rule参数具体说明。
     * @example ` {"action":"monitor","name":"test","scene":"custom_acl","conditions":[{"opCode":1,"key":"URL","values":"/example"}]}`
     */
    "Rule": string;
    /**
     * 要修改的规则配置对应的规则ID。
     * > 您可以调用[DescribeProtectionModuleRules](~~100398~~)查询所有已创建的规则的ID。
     * @example `369998`
     */
    "RuleId": number;
    /**
     * 要修改的规则配置的版本号。
     * > 您可以调用[DescribeProtectionModuleRules](~~100398~~)查询规则配置的版本号。
     * @example `2`
     */
    "LockVersion": number;
    /**
     * WAF实例ID。
     * > 您可以通过调用[DescribeInstanceInfo](~~140857~~)查询当前WAF实例ID。
     * @example `waf-cn-0xldbqt****`
     */
    "InstanceId": string;
    /**
     * 资源组ID。
     * @example `rg-aek2lav****s77i`
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
