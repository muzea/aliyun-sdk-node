export interface ModifyDBProxyEndpointAddressRequest {
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
     * 目标数据库代理连接地址的前缀。自定义。
     * >至少传入**DBProxyNewConnectString**和**DBProxyNewConnectStringPort**其中一个参数。
     * @example `test123456`
     */
    "DBProxyNewConnectString"?: string;
    /**
     * 目标数据库代理连接地址的端口。自定义。
     * >至少传入**DBProxyNewConnectString**和**DBProxyNewConnectStringPort**其中一个参数。
     * @example `3307`
     */
    "DBProxyNewConnectStringPort"?: string;
    /**
     * 需要修改的数据库代理连接地址的网络类型，取值：
     * * **Public**：公网
     * * **VPC**：内网（专有网络）
     * * **Classic**：内网（经典网络）
     * MySQL默认值：**Classic**。
     * > RDS PostgreSQL时，该参数必选，支持**Public**和**VPC**。
     * @example `Public`
     */
    "DBProxyConnectStringNetType"?: string;
    /**
     * 废弃参数，无需配置。
     * @example `normal`
     */
    "DBProxyEngineType"?: string;
}
