export interface DescribeInstanceSourcesRequest {
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh_cn**：默认值，中文（简体）。
     * - **en_us**：英文（美国）。
     * @example `zh_cn`
     */
    "Lang"?: string;
    /**
     * 分页查询时，设置每页包含未授权资产的数量。默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询时，设置当前页的页码。默认值为**1**。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 资产所在的地域。更多信息，请参见[支持地域](~~214257~~)。
     * @example `cn-hangzhou`
     */
    "ServiceRegionId"?: string;
    /**
     * 引擎类型，取值： **MySQL，MariaDB，Oracle，PostgreSQL，SQLServer**等。
     * @example `MySQL`
     */
    "EngineType"?: string;
    /**
     * 实例ID。
     * @example `instance-demo-****`
     */
    "InstanceId"?: string;
    /**
     * 指定待查询产品类型ID，取值：**1**：MaxCompute，**2**：OSS，**3**：ADS，**4**：OTS，**5**：RDS等。
     * @example `1`
     */
    "ProductId"?: number;
    /**
     * 指定待查询产品的名称，取值：**MaxCompute、OSS、ADS、OTS、RDS**等。
     * @example `MaxCompute`
     */
    "ProductCode"?: string;
    /**
     * 审计状态。取值：
     * - **1**：开启审计。
     * - **0**：关闭审计。
     * @example `1`
     */
    "AuditStatus"?: number;
    /**
     * 数据资产模糊查找的类型。
     * - **InstanceId**：实例ID。
     * - **InstanceName**：实例名称。
     * - **DatabaseName**：数据库名。
     * @example `InstanceId`
     */
    "SearchType"?: string;
    /**
     * 数据资产模糊查找的内容。
     * @example `1`
     */
    "SearchKey"?: string;
    /**
     * 数据资产实例的授权状态。
     * - **0**：未授权。
     * - **1**：已授权。
     * @example `0`
     */
    "AuthStatus"?: number;
    /**
     * 此参数已废弃。
     * @example `1`
     */
    "FeatureType"?: number;
}
