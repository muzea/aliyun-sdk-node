export interface DeleteDBProxyEndpointAddressRequest {
    /**
     * 地域ID。可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-t4n3a****`
     */
    "DBInstanceId": string;
    /**
     * 数据库代理连接地址ID。可以通过接口DescribeDBProxyEndpoint查询。
     * @example `ta9um4****`
     */
    "DBProxyEndpointId": string;
    /**
     * 需要删除的数据库代理连接地址的网络类型，取值：
     * * **Public**：公网
     * * **VPC**：内网（专有网络）
     * * **Classic**：内网（经典网络）
     * 默认值：**Classic**。
     * > - 无法删除默认创建的内网类型的连接地址。
     * > - RDS PostgreSQL仅支持**Public**和**VPC**。
     * @example `Public`
     */
    "DBProxyConnectStringNetType": string;
    /**
     * 废弃参数，无需配置。
     * @example `normal`
     */
    "DBProxyEngineType"?: string;
}
