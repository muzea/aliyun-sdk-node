export interface ModifyDomainIpv6StatusRequest {
    /**
     * WAF实例ID。
     * > 您可以通过调用[DescribeInstanceInfo](~~140857~~)接口查看当前WAF实例ID。
     * @example `waf-cn-mp9153****`
     */
    "InstanceId": string;
    /**
     * 已添加的域名名称。
     * @example `www.example.com`
     */
    "Domain": string;
    /**
     * 是否启用IPv6安全防护，取值：
     * - **0**：关闭
     * - **1**：开启
     * @example `0`
     */
    "Enabled": string;
    /**
     * WAF实例在资源管理服务中所属的资源组ID。
     * 不设置该参数表示默认资源组。
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
