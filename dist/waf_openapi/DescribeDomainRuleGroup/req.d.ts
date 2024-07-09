export interface DescribeDomainRuleGroupRequest {
    /**
     * 要查询的域名。
     * > 您可以调用[DescribeDomainList](~~255880~~)查询所有已接入WAF防护的域名。
     * @example `www.aliyundoc.com`
     */
    "Domain": string;
    /**
     * WAF实例的ID。
     * > 您可以调用[DescribeInstanceInfo](~~140857~~)查询当前WAF实例的ID。
     * @example `waf-cn-tl32ast****`
     */
    "InstanceId": string;
    /**
     * WAF实例在资源管理服务中所属的资源组ID。默认为空，即属于默认资源组。
     * 关于资源组的更多信息，请参见[创建资源组](~~94485~~)。
     * @example `rg-aek2oij****hbfi`
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
