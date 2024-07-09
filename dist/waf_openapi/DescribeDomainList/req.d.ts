export interface DescribeDomainListRequest {
    /**
     * WAF实例在资源管理服务中所属的资源组ID。默认为空，即属于默认资源组。
     * 关于资源组的更多信息，请参见[创建资源组](~~94485~~)。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
    /**
     * WAF实例的ID。
     * > 您可以调用[DescribeInstanceInfo](~~140857~~)，查看当前WAF实例的ID。
     * @example `waf-cn-7pp26f1****`
     */
    "InstanceId": string;
    /**
     * 要查询的域名名称。
     * 您可以设置该参数，模糊查询某个域名是否已接入WAF防护。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 分页查询时，返回第几页数据。默认值为**1**，表示返回第1页数据。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时，每页包含多少条结果。默认值为**10**，表示每页包含10条结果。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 要查询的域名类型。取值：
     * - **0**（默认）：表示查询所有域名（包含具体域名和泛域名）。
     * - **1**：表示仅查询具体域名。
     * @example `0`
     */
    "IsSub"?: number;
    /**
     * 要查询的域名列表。
     * 您可以设置该参数，模糊查询多个域名是否已接入WAF防护。
     * @example `example.com`
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
