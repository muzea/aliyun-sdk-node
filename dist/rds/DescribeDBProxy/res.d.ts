export interface DescribeDBProxyResponse {
    /**
     * 代理实例最新版本。
     * @example `1.13.12`
     */
    DBProxyInstanceLatestMinorVersion: string;
    /**
     * 请求ID。
     * @example `909A69EE-71C8-4417-A0B9-FF085407E1E3`
     */
    RequestId: string;
    /**
     * 代理实例当前版本。
     * @example `1.13.11`
     */
    DBProxyInstanceCurrentMinorVersion: string;
    /**
     * 开通的代理实例数量。
     * @example `1`
     */
    DBProxyInstanceNum: number;
    /**
     * 代理服务类型。
     * - 1：共享型代理
     * - 2：独享型代理
     * - 3：通用型代理
     * > RDS PostgreSQL不支持共享型代理。
     * @example `2`
     */
    DBProxyInstanceType: string;
    /**
     * 连接保持状态。取值：
     * - **Enabled**：开启
     * - **Disabled**：关闭
     * - **Unsupported**：实例不支持开启连接保持
     * @example `Disabled`
     */
    DBProxyPersistentConnectionStatus: string;
    /**
     * 代理实例的运行状态。
     * - DBInstanceClassChanging：变配中
     * - Creating：创建中
     * - Running：运行中
     * - Deleting：删除中
     * @example `Running`
     */
    DBProxyInstanceStatus: string;
    /**
     * 数据库代理功能开关状态。
     * - Shutdown：关闭
     * - Startup：开启
     * @example `Startup`
     */
    DBProxyServiceStatus: string;
    /**
     * 代理实例名称。
     * @example `gos787jog2wk0ye1****`
     */
    DBProxyInstanceName: string;
    /**
     * 该参数仅RDS PostgreSQL支持。表示代理实例规格实际大小。
     * 格式：`CPU/内存`。
     * 例如：4/8表示4核CPU 8GB内存。
     * @example `4/8`
     */
    DBProxyInstanceSize: string;
    /**
     * 内部参数，无需关注。
     * @example `normal`
     */
    DBProxyEngineType: string;
    DBProxyConnectStringItems: {
        /**
         * 数据库代理的连接地址信息列表。
         */
        DBProxyConnectStringItems: {
            /**
             * 代理网络类型。
             * - 0：公网
             * - 1：经典网络
             * - 2：专有网络
             * @example `2`
             */
            DBProxyConnectStringNetWorkType: string;
            /**
             * 代理连接地址的网络类型。
             * - OuterString：外网
             * - InnerString：内网
             * @example `InnerString`
             */
            DBProxyConnectStringNetType: string;
            /**
             * 代理的实例ID。
             * @example `rm-bp145737x5****131161274792****`
             */
            DBProxyVpcInstanceId: string;
            /**
             * 代理终端名称，真实服务的代理终端ID。
             * @example `gos787jog2wk0ye1****`
             */
            DBProxyEndpointName: string;
            /**
             * 后端代理终端ID。
             * @example `20****`
             */
            DBProxyEndpointId: string;
            /**
             * 代理连接地址的端口。
             * @example `3306`
             */
            DBProxyConnectStringPort: string;
            /**
             * 代理终端连接地址。
             * @example `gos787jog2wk0ye1****-rw4rm.rwlb.rds.aliyuncs.com`
             */
            DBProxyConnectString: string;
            /**
             * 代理服务地址的VPC。
             * @example `vpc-uf6oobt****`
             */
            DBProxyVpcId: string;
            /**
             * 代理服务地址的vSwitch。
             * @example `vsw-uf6l0pic17****`
             */
            DBProxyVswitchId: string;
        }[];
    };
    DbProxyEndpointItems: {
        /**
         * 代理终端信息列表。
         */
        DbProxyEndpointItems: {
            /**
             * 代理终端的备注信息。
             * @example `proxy-test`
             */
            DbProxyEndpointAliases: string;
            /**
             * 代理终端ID。
             * @example `gos787jog2wk0ye1****`
             */
            DbProxyEndpointName: string;
            /**
             * 代理终端类型。
             * - Custom：自定义代理终端
             * - RWSplit：默认代理终端
             * @example `RWSplit`
             */
            DbProxyEndpointType: string;
            /**
             * 代理终端模式。
             * - ReadOnly：只读模式
             * - ReadWrite：读写模式
             * @example `ReadWrite`
             */
            DbProxyReadWriteMode: string;
        }[];
    };
    /**
     * 资源组ID。
     * @example `rg-acfmy****`
     */
    ResourceGroupId: string;
    DBProxyAVZones: {
        /**
         * 代理服务所在的可用区列表。
         */
        DBProxyAVZones: string[];
    };
}
