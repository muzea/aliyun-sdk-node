export interface UpdateConfigRequest {
    /**
     * 扩展请求参数，JSON格式。
     * @example `{}`
     */
    "RequestPars"?: string;
    /**
     * 集群ID。
     * @example `mse-09k1q11****`
     */
    "ClusterId"?: string;
    /**
     * 配置格式，包括TEXT、JSON、XML、HTML等。
     * @example `TEXT`
     */
    "ConfigType"?: string;
    /**
     * zookeeper配置，时间单元，默认为2000毫秒。
     * @example `2000`
     */
    "TickTime"?: string;
    /**
     * zookeeper配置，实例最长连接时间，单位：秒。
     * @example `100`
     */
    "InitLimit"?: string;
    /**
     * zookeeper配置，实例连接超时时间，单位：秒。
     * @example `10`
     */
    "SyncLimit"?: string;
    /**
     * zookeeper配置，单个客户端与单台服务器之间的连接数。
     * 如果设置为0，表示不作任何限制。
     * @example `0`
     */
    "MaxClientCnxns"?: string;
    /**
     * zookeeper配置，超级权限开关，取值如下：
     * - `true`：打开
     * - `false`：关闭
     * @example `true`
     */
    "OpenSuperAcl"?: string;
    /**
     * 用户名称。
     * > 当OpenSuperAcl为true时，需要填写此值。
     * @example `name`
     */
    "UserName"?: string;
    /**
     * 用户密码。
     * > 当OpenSuperAcl为true时，需要填写此值。
     * @example `password`
     */
    "PassWord"?: string;
    /**
     * zookeeper配置，每个节点最大数据量，默认是1M，单位：字节。
     * @example `1048575`
     */
    "JuteMaxbuffer"?: string;
    /**
     * 保留字段。
     * @example `none`
     */
    "AutopurgePurgeInterval"?: string;
    /**
     * 保留字段。
     * @example `none`
     */
    "AutopurgeSnapRetainCount"?: string;
    /**
     * nacos配置，是否开启配置中心ram鉴权：
     * - `true`：开启
     * - `false`：关闭
     * > 设置此值前需要调用QueryConfig接口，获取ConfigAuthSupported参数，以查看当前集群是否支持此功能。
     * @example `true`
     */
    "ConfigAuthEnabled"?: boolean;
    /**
     * nacos配置，是否开启注册中心ram鉴权：
     * - `true`：开启
     * - `false`：关闭
     * > 设置此值前需要调用QueryConfig接口，获取NamingAuthSupporte参数，以查看当前集群是否支持此功能。
     * @example `true`
     */
    "NamingAuthEnabled"?: boolean;
    /**
     * nacos配置，MCP是否生效，取值如下：
     * - `true`：生效
     * - `false`：不生效
     * > 设置此值前需要调用QueryConfig接口，获取MCPSupported参数，以查看当前集群是否支持此功能。
     * @example `true`
     */
    "MCPEnabled"?: boolean;
    /**
     * 实例ID。
     * @example `mse_prepaid_public_cn-st2212****`
     */
    "InstanceId"?: string;
    /**
     * nacos配置，是否打开配置中心配置加密功能，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * > 设置此值前需要调用QueryConfig接口，获取ConfigSecretSupported参数，以查看当前集群是否支持此功能。
     * @example `true`
     */
    "ConfigSecretEnabled"?: boolean;
    /**
     * zookeeper配置，最小超时时间，单位：秒。
     * @example `10`
     */
    "MinSessionTimeout"?: string;
    /**
     * zookeeper配置，最大超时时间，单位：秒。
     * @example `1000`
     */
    "MaxSessionTimeout"?: string;
    /**
     * zookeeper配置，生成快照的频率
     * @example `100000`
     */
    "SnapshotCount"?: string;
    /**
     * zookeeper参数，是否开启TTL配置。
     * @example `true`
     */
    "ExtendedTypesEnable"?: string;
    /**
     * Nacos是否开启支持Eurka协议
     * @example `true`
     */
    "EurekaSupported"?: boolean;
    /**
     * Nacos是否开启TLS传输链路加密
     * @example `true`
     */
    "TLSEnabled"?: boolean;
    /**
     * 是否开启Nacos开源控制台
     * @example `true`
     */
    "ConsoleUIEnabled"?: boolean;
    "Enable4lw"?: boolean;
    "AuthEnabled"?: boolean;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
