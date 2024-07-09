export interface CreateDBProxyEndpointAddressRequest {
    /**
     * 地域ID。可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-t4n3****`
     */
    "DBInstanceId": string;
    /**
     * 数据库代理连接地址ID。可以调用DescribeDBProxyEndpoint接口查询。
     * @example `ta9um4****`
     */
    "DBProxyEndpointId": string;
    /**
     * 新的数据库代理连接地址的前缀。自定义。
     * @example `test1234`
     */
    "ConnectionStringPrefix": string;
    /**
     * 新的数据库代理连接地址的端口，默认值：
     * - MySQL：**3306**
     * - PostgreSQL：**5432**
     * @example `3306`
     */
    "DBProxyNewConnectStringPort"?: string;
    /**
     * 新的数据库代理连接地址的网络类型，取值：
     * * **Public**：公网
     * * **VPC**：内网（专有网络）
     * * **Classic**：内网（经典网络）
     * 默认值：**Classic**。
     * @example `Public`
     */
    "DBProxyConnectStringNetType": string;
    /**
     * 新的数据库代理连接地址的VPC ID。可调用DescribeDBInstanceAttribute接口查询。
     * >当**DBProxyConnectStringNetType**取值为**VPC**时， 必须传入此参数。
     * @example `vpc-bp****`
     */
    "VPCId"?: string;
    /**
     * 新的数据库代理连接地址的虚拟交换机ID。可调用DescribeDBInstanceAttribute接口查询。
     * >当**DBProxyConnectStringNetType**取值为**VPC**时， 必须传入此参数。
     * @example `vsw-bp****`
     */
    "VSwitchId"?: string;
    /**
     * 预留参数，无需配置。
     * @example `normal`
     */
    "DBProxyEngineType"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
