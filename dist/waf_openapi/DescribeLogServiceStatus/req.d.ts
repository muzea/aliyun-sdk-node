export interface DescribeLogServiceStatusRequest {
    /**
     * WAF实例的ID。
     * > 您可以调用DescribeInstanceInfo查询当前WAF实例的ID。
     * @example `waf-cn-zz11sr5****`
     */
    "InstanceId": string;
    /**
     * 日志服务地域ID。取值：
     * - **cn**：中国内地地区（默认）
     * - **cn-hongkong**：海外地区
     * @example `cn`
     */
    "Region"?: string;
    /**
     * WAF实例在资源管理服务中所属的资源组ID。默认为空，即属于默认资源组。
     * 关于资源组的更多信息，请参见[创建资源组](~~94485~~)。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
    /**
     * 当前页码。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的行数。默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 要查询的域名列表。一次最多允许查询10个域名。不填写该参数表示查询所有域名。
     * > 您可以调用[DescribeDomainNames](~~86373~~)查询所有已经接入当前WAF实例进行防护的域名。
     */
    "DomainNames"?: string[];
    /**
     * WAF实例所属地域。取值：
     * - **cn-hangzhou**：表示中国内地。
     * - **ap-southeast-1**：表示非中国内地。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
