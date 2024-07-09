export interface DescribeDomainBasicConfigsRequest {
    /**
     * WAF实例的ID。
     * > 您可以调用[DescribeInstanceInfo](~~140857~~)查询当前WAF实例的ID。
     * @example `waf-cn-tl32ast****`
     */
    "InstanceId": string;
    /**
     * 设置域名关键字，查询包含指定关键字的域名配置。
     * 不设置该参数表示查询所有域名配置。
     * @example `aliyundoc`
     */
    "DomainKey"?: string;
    /**
     * 设置域名接入模式，查询使用指定方式接入WAF防护的域名配置。取值：
     * - **waf-cloud-dns**：表示CNAME接入。
     * - **waf-cloud-native**：表示透明接入。
     * 不设置该参数表示查询所有域名配置。
     * @example `waf-cloud-dns`
     */
    "AccessType"?: string;
    /**
     * 设置源站类型，查询在透明接入方式下通过指定源站类型接入WAF防护的域名配置。取值：
     * - **0**：表示云服务器ECS实例。
     * - **1**：表示传统型负载均衡CLB实例。
     * - **2**：表示应用型负载均衡ALB实例。
     * 不设置该参数表示查询所有域名配置。
     * @example `0`
     */
    "CloudNativeProductId"?: number;
    /**
     * 分页查询时，设置当前页面的页码。默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时，设置每页包含域名配置的数量。默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 网站域名在资源管理服务中所属的资源组ID。
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
