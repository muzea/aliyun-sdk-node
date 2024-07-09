export interface DescribeInstanceInfoRequest {
    /**
     * 要查询的WAF实例的ID。
     * 不设置该参数表示查询中国内地地域或非中国内地地域的所有WAF实例信息。
     * @example `waf-cn-tl32ast****`
     */
    "InstanceId"?: string;
    /**
     * WAF实例在资源管理服务中所属的资源组ID。不设置该参数表示默认资源组。
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
