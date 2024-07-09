export interface QueryConfigResponse {
    /**
     * 信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `8BD1E58D-0755-42AC-A599-E6B55112EC53`
     */
    RequestId: string;
    /**
     * 数据概览。
     */
    Data: {
        /**
         * zookeeper配置，单个客户端与单台服务器之间的连接数。
         * 如果设置为0，表示不作任何限制。
         * @example `0`
         */
        MaxClientCnxns: string;
        /**
         * nacos配置，当前集群的配置中心是否支持ram鉴权，取值如下：
         * - `true`：支持
         * - `false`：不支持
         * @example `true`
         */
        ConfigAuthSupported: boolean;
        /**
         * zookeeper配置，实例最长连接时间，单位：秒。
         * @example `100`
         */
        InitLimit: string;
        /**
         * nacos配置，MCP是否生效，取值如下：
         * - `true`：生效
         * - `false`：不生效
         * @example `true`
         */
        MCPEnabled: boolean;
        /**
         * zookeeper配置，超级权限开关，取值如下：
         * - `true`：打开
         * - `false`：关闭
         * @example `true`
         */
        OpenSuperAcl: boolean;
        /**
         * 当前集群是否已重启并应用新配置，取值如下：
         * - `true`：重启成功。
         * - `false`：重启失败。
         * @example `true`
         */
        RestartFlag: boolean;
        /**
         * 保留字段
         * @example `none`
         */
        JvmFlagsCustom: string;
        /**
         * 保留字段。
         * @example `none`
         */
        AutopurgePurgeInterval: string;
        /**
         * 保留字段。
         * @example `none`
         */
        AutopurgeSnapRetainCount: string;
        /**
         * zookeeper配置，实例连接超时时间，单位：秒。
         * @example `10`
         */
        SyncLimit: string;
        /**
         * nacos配置，是否开启配置中心ram鉴权，取值如下：
         * - `true`：生效
         * - `false`：未生效
         * @example `true`
         */
        ConfigAuthEnabled: boolean;
        /**
         * 集群名称。
         * @example `name`
         */
        ClusterName: string;
        /**
         * nacos配置，MCP是否支持，取值如下：
         * - `true`：支持
         * - `false`：不支持
         * @example `true`
         */
        MCPSupported: boolean;
        /**
         * zookeeper配置，每个节点最大数据量，单位：字节。
         * @example `1`
         */
        JuteMaxbuffer: string;
        /**
         * zookeeper配置，引擎中的一个时间单元，默认为2000毫秒。
         * @example `2000`
         */
        TickTime: string;
        /**
         * 用户密码。当OpenSuperAcl为true时，展示此值。
         * @example `password`
         */
        PassWord: string;
        /**
         * 用户名称。当OpenSuperAcl为true时，展示此值。
         * @example `name`
         */
        UserName: string;
        /**
         * nacos配置，当前集群是否支持配置中心配置加密，取值如下：
         * - `true`：支持
         * - `false`：不支持
         * @example `true`
         */
        ConfigSecretSupported: boolean;
        /**
         * nacos配置，当前集群是否开启配置中心配置加密，取值如下：
         * - `true`：开启
         * - `false`：未开启
         * @example `true`
         */
        ConfigSecretEnabled: boolean;
        /**
         * nacos配置，是否开启注册中心ram鉴权：
         * - `true`：开启
         * - `false`：关闭
         * @example `false`
         */
        NamingAuthEnabled: boolean;
        /**
         * nacos配置，当前集群是否支持服务ram鉴权，取值如下：
         * - `true`：支持
         * - `false`：不支持
         * @example `true`
         */
        NamingAuthSupported: boolean;
        /**
         * nacos配置，当前集群是否支持创建服务，取值如下：
         * - `true`：支持
         * - `false`：不支持
         * @example `true`
         */
        NamingCreateServiceSupported: boolean;
        /**
         * zookeeper配置，最小超时时间。
         * @example `-1`
         */
        MinSessionTimeout: string;
        /**
         * zookeeper配置，最大超时时间。
         * @example `-1`
         */
        MaxSessionTimeout: string;
        /**
         * zookeeper配置，生成快照的频率
         * @example `100000`
         */
        SnapshotCount: string;
        /**
         * 单个配置的配置内容大小上限（单位：KB）。
         * @example `100`
         */
        ConfigContentLimit: number;
        /**
         * nacos运行时配置。
         */
        NacosRunningEnv: {
            /**
             * 推空保护开关。
             * @example `true`
             */
            emptyProtect: boolean;
        };
        /**
         * zookeeper参数，是否开启TTL配置。
         * @example `true`
         */
        ExtendedTypesEnable: boolean;
        /**
         * 是否打开Eureka协议的访问端口8761。关闭此端口，应用将无法使用Eureka协议进行服务注册发现。
         * @example `true`
         */
        EurekaSupported: boolean;
        /**
         * MSE Nacos从2.1.2.1版本开始支持TLS传输链路加密，nacos-client需升级至2.2.1及以上版本，开启TLS后，会有10%左右性能下降，请合理评估系统容量水位，操作指引详见Nacos TLS传输加密.
         * @example `true`
         */
        TLSEnabled: boolean;
        /**
         * 是否开始Nacos开源控制台
         * @example `true`
         */
        ConsoleUIEnabled: boolean;
        Enable4lw: boolean;
        /**
         * ZooKeeper sasl 强制身份认证开关
         */
        AuthEnabled: boolean;
    };
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     *
     * 返回结果码。
     * @example `200`
     */
    Code: number;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
