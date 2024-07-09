export interface ModifyProtectionRuleCacheStatusRequest {
    /**
     * 已添加的域名名称。
     * @example `www.example.com`
     */
    "Domain": string;
    /**
     * 配置规则ID。
     * > 调用[DescribeProtectionModuleRules](~~100398~~)接口可以查询到所有规则ID。
     * @example `42755`
     */
    "RuleId": number;
    /**
     * 防护功能模块。固定取值：**tamperproof**。
     * @example `tamperproof`
     */
    "DefenseType": string;
    /**
     * WAF实例ID。
     * > 您可以通过调用[DescribeInstanceInfo](~~140857~~)接口查看当前WAF实例ID。
     * @example `waf_elasticity-cn-0xldbqt****`
     */
    "InstanceId": string;
    /**
     * WAF实例所属地域。取值：
     * - **cn-hangzhou**：表示中国内地。
     * - **ap-southeast-1**：表示非中国内地。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * WAF实例在资源管理服务中所属的资源组ID。默认为空，即属于默认资源组。
     * 关于资源组的更多信息，请参见[创建资源组](~~94485~~)。
     * @example `rg-atstuj3rtop****`
     */
    "ResourceGroupId"?: string;
}
