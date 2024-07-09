export interface DescribeProtectionModuleModeRequest {
    /**
     * 要查询的网站域名。
     * > 网站域名必须已经接入WAF防护。您可以调用[DescribeDomainList](~~255880~~)查询所有已接入WAF防护的网站域名。
     * @example `www.aliyundoc.com`
     */
    "Domain": string;
    /**
     * 要查询其模式的防护模块。取值：
     * - **waf**：表示规则防护引擎。
     * - **dld**：表示深度学习引擎。
     * - **ac_cc**：表示CC安全防护。
     * - **antifraud**：表示数据风控。
     * - **normalized**：表示主动防御。
     * @example `waf`
     */
    "DefenseType": string;
    /**
     * WAF实例的ID。
     * > 您可以调用[DescribeInstanceInfo](~~140857~~)查询当前WAF实例的ID。
     * @example `waf-cn-tl32ast****`
     */
    "InstanceId": string;
    /**
     * 网站域名在资源管理服务中所属的资源组ID。不设置该参数表示默认资源组。
     * @example `rg-atstuj3rtop****`
     */
    "ResourceGroupId"?: string;
    "RegionId"?: string;
}
