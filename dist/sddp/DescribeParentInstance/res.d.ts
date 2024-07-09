export interface DescribeParentInstanceResponse {
    /**
     * 结果的请求ID。
     * @example `ACEF9334-BB50-525D-8CF3-6CF504E4D1B3`
     */
    RequestId: string;
    /**
     * 分页查询时，设置当前页面的页码。默认值：**1**。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 分页查询时，设置列表中每页显示的数据资产实例的最大条数。默认值：**10**。
     * @example `10`
     */
    PageSize: number;
    /**
     * 结果中数据的总条数。
     * @example `3`
     */
    TotalCount: number;
    /**
     * 查询到的数据资产列表。
     */
    Items: {
        /**
         * 实例ID。
         * @example `rm-*******t2vz`
         */
        InstanceId: string;
        /**
         * 地域名称。取值说明如下：
         * - **华东1（杭州）**
         * - **华东2（上海）**
         * - **华北2（北京）**
         * - **华北3（张家口）**
         * - **华南1（深圳）**
         * - **华南3（广州）**
         * - **中国（香港）**
         * - **新加坡**
         * - **美国（硅谷）**
         * @example `华东1（杭州）`
         */
        LocalName: string;
        /**
         * 引擎类型。取值： **MySQL，MariaDB，Oracle，PostgreSQL，SQLServer**等。
         * @example `MySQL`
         */
        EngineType: string;
        /**
         * 授权资产的标识，如为结构化数据，标识为实例ID.数据库名。
         * @example `rm-******xxx.**st`
         */
        ParentId: string;
        /**
         * 实例下的数据库数量。
         * @example `3`
         */
        DbNum: string;
        /**
         * 实例状态。
         * @example `Running`
         */
        ClusterStatus: string;
        /**
         * 租户ID，仅针对Oceanbase资产有效。
         * @example `HB***-zh_CN`
         */
        TenantId: string;
        /**
         * 租户名称，仅针对Oceanbase资产有效。
         * @example `user1`
         */
        TenantName: string;
        /**
         * 实例的描述。
         * @example `instance description`
         */
        InstanceDescription: string;
        /**
         * 资产类型名称。取值：
         * - **MaxCompute**
         * - **OSS**
         * - **ADB-MYSQL**
         * - **TableStore**
         * - **RDS**
         * - **SelfDB**
         * - **PolarDB-X**
         * - **PolarDB**
         * - **ADB-PG**
         * - **OceanBase**
         * - **MongoDB**
         * - **Redis**
         * @example `RDS`
         */
        ResourceType: string;
        /**
         * 实例下未连接的数据库数量。
         * @example `1`
         */
        UnConnectDbCount: string;
        /**
         * 不支持一连接的原因。
         * @example `engine type not support`
         */
        UnSupportOneClickAuthReason: string;
        /**
         * 连接节点类型，仅针对MongoDB资产类型有效。
         * @example `Primary`
         */
        ConnectNode: string;
        /**
         * 支持的链接节点，多个用逗号分隔。
         * @example `Primary,Secondary`
         */
        SupportConnectNodes: string;
        /**
         * 数据资产实例的授权状态。
         * - **0**：未授权。
         * - **1**：已授权。
         * @example `1`
         */
        AuthStatus: number;
        /**
         * 实例的空间大小，只对OSS资产类型有效。单位：字节。
         * @example `409600`
         */
        InstanceSize: number;
        /**
         * 审计授权状态。取值：
         * - **1**：已授权。
         * - **0**：未授权。
         * @example `1`
         */
        AuditStatus: number;
        /**
         * 成员账号ID。
         * @example `**********8103`
         */
        MemberAccount: number;
        /**
         * 实例授权时间，单位：毫秒。
         * @example `1719882941000`
         */
        AuthTime: number;
    }[];
}
