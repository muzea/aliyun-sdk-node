export interface CreateProtectionModuleRuleRequest {
    /**
     * 要添加防护规则配置的域名。
     * > 您可以调用[DescribeDomainNames](~~86373~~)查询所有已添加到WAF进行防护的域名。
     * @example `www.example.com`
     */
    "Domain": string;
    /**
     * 要配置的防护功能模块。取值：
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
     * 规则配置内容，以一系列参数构造的JSON格式转化成字符串。
     * > 根据所指定的防护功能模块配置（**DefenseType**）不同，具体涉及的参数有所不同。详细信息，请参见Rule参数具体说明。
     * @example ` {"action":"monitor","name":"test","scene":"custom_acl","conditions":[{"opCode":1,"key":"URL","values":"/example"}]}`
     */
    "Rule": string;
    /**
     * WAF实例ID。
     * > 您可以调用[DescribeInstanceInfo](~~140857~~)查询当前WAF实例的ID。
     * @example `waf-cn-0xldbqt****`
     */
    "InstanceId": string;
    /**
     * WAF实例在资源管理服务中所属的资源组ID。默认为空，即属于默认资源组。
     * 关于资源组的更多信息，请参见[创建资源组](~~94485~~)。
     * @example `rg-atstuj3rtop****`
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
