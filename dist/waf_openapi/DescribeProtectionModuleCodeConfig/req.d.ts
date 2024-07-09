export interface DescribeProtectionModuleCodeConfigRequest {
    /**
     * 要查询的代码类型。取值固定为**14**，表示查询适用于WAF地域级IP黑名单配置的地域代码。
     * @example `14`
     */
    "CodeType": number;
    /**
     * 要查询的地域代码的类型。取值：
     * - **0**：表示查询中国境内地域的代码。
     * - **1**：表示查询中国境外地域的代码。
     * 不设置该参数表示查询所有类型。
     * @example `0`
     */
    "CodeValue"?: number;
    /**
     * WAF实例的ID。
     * > 您可以调用[DescribeInstanceInfo](~~140857~~)查询当前WAF实例的ID。
     * @example `waf-cn-tl32ast****`
     */
    "InstanceId": string;
    /**
     * 网站域名在资源管理服务中所属的资源组ID。不设置该参数表示默认资源组。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
    "RegionId"?: string;
}
