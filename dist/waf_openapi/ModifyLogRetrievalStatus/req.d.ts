export interface ModifyLogRetrievalStatusRequest {
    /**
     * 要操作的WAF实例ID。
     * > 您可以调用[DescribeInstanceInfo](~~140857~~)查询WAF实例的ID。
     * @example `waf_elasticity-cn-0xldbqt****`
     */
    "InstanceId": string;
    /**
     * 已添加的域名名称。
     * > 您可以调用[DescribeDomainNames](~~86373~~)查询所有已经添加的域名。
     * @example `www.example.com`
     */
    "Domain": string;
    /**
     * 是否开启日志检索功能，取值：
     * - **0**：表示关闭。
     * - **1**：表示开启。
     * > 只有为域名开启日志检索功能后，WAF才会记录该域名的访问请求日志。如果您关闭日志检索功能，则处于关闭状态期间的访问请求日志不会被记录；即使重新开启日志检索功能，您也无法查询到停用期间的访问请求日志。
     * @example `1`
     */
    "Enabled": number;
    /**
     * WAF实例在资源管理服务中所属的资源组ID。
     * 不设置该参数表示默认资源组。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
    /**
     * WAF实例所属地域。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
