export interface ModifyDBProxyRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 开启或关闭数据库代理，取值：
     * * **Startup**：开启代理服务
     * * **Shutdown**：关闭代理服务
     * * **Modify**：修改代理服务
     * @example `Startup`
     */
    "ConfigDBProxyService": string;
    /**
     * 开通代理实例数量，取值：**1**~**16**。默认值：**1**。
     * >更多的代理实例能处理更多的请求，您可以根据监控数据了解代理实例的负载，然后设置合理的代理实例数量。
     * @example `1`
     */
    "DBProxyInstanceNum"?: string;
    /**
     * 地域ID，可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 实例的网络类型。当前仅支持VPC网络，取值：**VPC**。
     * > RDS MySQL云盘版或RDS PostgreSQL开启数据库代理时，该参数必选。
     * @example `VPC`
     */
    "InstanceNetworkType"?: string;
    /**
     * 实例所属VPC ID。可调用DescribeDBInstanceAttribute接口查询。
     * > RDS MySQL云盘版或RDS PostgreSQL开启数据库代理时，该参数必选。
     * @example `vpc-****`
     */
    "VPCId"?: string;
    /**
     * 实例所属虚拟交换机ID。可调用DescribeDBInstanceAttribute接口查询。
     * > RDS MySQL云盘版或RDS PostgreSQL开启数据库代理时，该参数必选。
     * @example `vsw-****`
     */
    "VSwitchId"?: string;
    /**
     * 废弃参数，无需配置。
     * @example `normal`
     */
    "DBProxyEngineType"?: string;
    /**
     * 数据库代理实例类型，取值：
     * - **common**：通用型代理
     * - **exclusive**：独享型代理（默认值）
     * @example `exclusive`
     */
    "DBProxyInstanceType"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
    /**
     * 是否开启连接保持。取值：
     * - **Enabled**：开启连接保持
     * - **Disabled**：关闭连接保持
     * > - 仅RDS MySQL支持此参数。
     * > - 修改连接保持状态时，**ConfigDBProxyService**取值为**Modify**。
     * @example `Disabled`
     */
    "PersistentConnectionStatus"?: string;
}
