export interface ListHostsRequest {
    /**
     * 要查询主机的堡垒机实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 要查询主机的堡垒机所在地域的ID。
     * > 地域ID和地域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 设置分页查询时，每页显示的主机信息的数量。默认值为**10**，表示每页显示10条主机信息。
     * > 建议PageSize取值不要为空。
     * @example `20`
     */
    "PageSize"?: string;
    /**
     * 要查询的主机的操作系统。取值：
     * - **Linux**
     * - **Windows**
     * @example `Linux`
     */
    "OSType"?: string;
    /**
     * 要查询的主机名称。不支持模糊查询，只支持精确查询。
     * @example `host`
     */
    "HostName"?: string;
    /**
     * 要查询的主机地址，可使用域名或IP地址。不支持模糊查询，只支持精确查询。
     * @example `1.1.XX.XX`
     */
    "HostAddress"?: string;
    /**
     * 要查询主机的来源。取值：
     * - **Local**：本地主机
     * - **Ecs**：ECS实例
     * - **Rds**：RDS专属集群主机
     * @example `Local`
     */
    "Source"?: string;
    /**
     * 要查询的主机对应的ECS实例ID或专属集群主机ID。不支持模糊查询，只支持精确查询。
     * @example `i-bp19ienyt0yax748****`
     */
    "SourceInstanceId"?: string;
    /**
     * 要查询的主机状态。取值：
     *  - **Normal**：正常
     * - **Release**：已释放
     * @example `Normal`
     */
    "SourceInstanceState"?: string;
    /**
     * 要查询的主机所在主机组的ID。
     * > 您可以调用[ListHostGroups](~~201307~~)接口获取主机组ID。
     * @example `1`
     */
    "HostGroupId"?: string;
}
