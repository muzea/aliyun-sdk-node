export interface DescribeDomainAdvanceConfigsRequest {
    /**
     * WAF实例的ID。
     * > 您可以调用[DescribeInstanceInfo](~~140857~~)查询当前WAF实例的ID。
     * @example `waf-cn-2r427ng****`
     */
    "InstanceId": string;
    /**
     * 要查询配置详情的域名。支持同时设置多个域名，多个域名间使用半角逗号（,）分隔。
     * > 您可以调用[DescribeDomainList](~~255880~~)查询所有已接入WAF防护的域名。
     * @example `www.aliyundoc.com`
     */
    "DomainList": string;
    /**
     * 网站域名在资源管理服务中所属的资源组ID。
     * 不设置该参数表示默认资源组。
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
