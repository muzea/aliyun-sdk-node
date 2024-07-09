export interface DescribeParentInstanceRequest {
    /**
     * 分页查询时，设置当前页面的页码。默认值：**1**。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时设置的每页行数。默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 资产所在的地域。取值：
     * - **cn-beijing**：华北2（北京）。
     * - **cn-zhangjiakou**：华北3（张家口）。
     * - **cn-huhehaote**：华北5（呼和浩特）。
     * - **cn-hangzhou**：华东1（杭州）。
     * - **cn-shanghai**：华东2（上海）。
     * - **cn-shenzhen**：华南1（深圳）。
     * - **cn-hongkong**：中国香港。
     * @example `cn-shanghai`
     */
    "ServiceRegionId"?: string;
    /**
     * 引擎类型，取值： **MySQL，MariaDB，Oracle，PostgreSQL，SQLServer**等。
     * @example `MySQL`
     */
    "EngineType"?: string;
    /**
     * 数据资产表中列数据所属的资产实例ID。
     * @example `rm-*******xx`
     */
    "InstanceId"?: string;
    /**
     * 数据库名称。
     * @example `db_**t`
     */
    "DbName"?: string;
    /**
     * 产品类型。取值：
     * - **1**：MaxCompute
     * - **2**：OSS
     * - **3**：ADB-MYSQL
     * - **4**：TableStore
     * - **5**：RDS
     * - **6**：SelfDB
     * - **7**：PolarDB-X
     * - **8**：PolarDB
     * - **9**：ADB-PG
     * - **10**：OceanBase
     * - **11**：MongoDB
     * - **25**：Redis
     * @example `5`
     */
    "ResourceType"?: number;
    /**
     * 实例或实例下数据库连接状态。取值：
     * - **-3**：数据库未创建。
     * - **-2**：已释放。
     * - **-1**：未连接。
     * - **2**：连通性测试中。
     * - **3**：已连接。
     * - **4**：连接失败。
     * @example `3`
     */
    "CheckStatus"?: number;
    /**
     * 实例状态。
     * - **Running**：运行中。
     * - **Released**：已释放。
     * - **DatabaseNotCreated**：数据库未创建。
     * @example `Running`
     */
    "ClusterStatus"?: string;
    /**
     * 数据资产实例的授权状态。
     * - **0**：未授权。
     * - **1**：已授权。
     * @example `0`
     */
    "AuthStatus"?: number;
    /**
     * 成员账号ID。
     * @example `**********8103`
     */
    "MemberAccount"?: number;
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh_cn**：默认值，中文（简体）。
     * - **en_us**：英文（美国）。
     * @example `zh_cn`
     */
    "Lang"?: string;
}
