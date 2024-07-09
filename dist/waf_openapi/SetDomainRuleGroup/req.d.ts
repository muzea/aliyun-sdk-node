export interface SetDomainRuleGroupRequest {
    /**
     * 要设置防护规则组的域名列表。使用数组转化的字符串格式表示。
     * 支持同时设置多个域名，格式：`["<域名1>","<域名2>",……]`。
     * > 您可以调用[DescribeDomainList](~~255880~~)查询所有已接入WAF防护的域名。
     * @example `["www.aliyundoc.com"]`
     */
    "Domains": string;
    /**
     * 为规则防护引擎设置要应用的防护规则组ID。取值：
     * - **1011**：表示WAF内置的严格规则组。
     * - **1012**：表示WAF内置的中等规则组。
     * - **1013**：表示WAF内置的宽松规则组。
     * 除了以上内置规则组外，您还可以设置自定义规则组的ID。
     * > 您可以在[Web应用防火墙控制台](https://yundun.console.aliyun.com/?p=wafnext)的**防护规则组**页面，获取自定义规则组的ID。
     * @example `1012`
     */
    "RuleGroupId": number;
    /**
     * 为当前配置设置一个版本号（用于实现乐观锁控制）。
     * @example `1`
     */
    "WafVersion"?: number;
    /**
     * WAF实例ID。
     * > 您可以通过调用[DescribeInstanceInfo](~~140857~~)接口查看当前WAF实例ID。
     * @example `waf-cn-tl32ast****`
     */
    "InstanceId": string;
    /**
     * 网站域名在资源管理服务中所属的资源组ID。
     * 不设置该参数表示默认资源组。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
    /**
     * 设置智能规则托管功能的启用状态。取值：
     * - **0**：表示关闭。
     * - **1**（默认）：表示开启。
     * 智能规则托管表示由WAF智能学习历史业务流量的行为模式，识别可能对正常业务产生误拦截的防护规则，并通过自动设置Web入侵防护白名单，在特定业务防护场景下屏蔽对应防护规则。等误报风险消除后，再恢复使用被屏蔽的防护规则。
     * @example `1`
     */
    "WafAiStatus"?: number;
    /**
     * WAF实例所属地域。取值：
     * - **cn-hangzhou**：表示中国内地。
     * - **ap-southeast-1**：表示非中国内地。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
