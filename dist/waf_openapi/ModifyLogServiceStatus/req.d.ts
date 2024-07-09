export interface ModifyLogServiceStatusRequest {
    /**
     * WAF实例ID。
     * 您可以通过调用[DescribeInstanceInfo](~~140857~~)接口查看当前WAF实例ID。
     * @example `waf_elasticity-cn-0xldbqt****`
     */
    "InstanceId": string;
    /**
     * 已添加的域名名称。
     * @example `www.example.com`
     */
    "Domain": string;
    /**
     * 是否开启日志采集功能，取值：
     * - **0**：关闭
     * - **1**：开启
     * @example `1`
     */
    "Enabled": number;
    /**
     * WAF实例在资源管理服务中所属的资源组ID。默认为空，即属于默认资源组。
     * 关于资源组的更多信息，请参见[创建资源组](~~94485~~)。
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
