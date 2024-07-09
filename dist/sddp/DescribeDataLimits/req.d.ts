export interface DescribeDataLimitsRequest {
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 分页查询时，指定每页最多显示的数据条数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询时，设置当前页面的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 必填，实例、库、Bucket数据资产所属产品类型。取值：
     * - **1**：MaxCompute
     * - **2**：OSS
     * - **3**：ADS
     * - **4**：OTS
     * - **5**：RDS
     * - **6**：SELF_DB
     * @example `1`
     */
    "ResourceType"?: number;
    /**
     * 数据资产所属的父类型资产ID。取值：
     * - MaxCompute的项目名称或ID。
     * - OSS的Bucket名称或ID。
     * - RDS的实例名称或ID或数据库名称或ID。
     * @example `1112`
     */
    "ParentId"?: string;
    /**
     * 资产所在的地域。
     * @example `cn-hangzhou`
     */
    "ServiceRegionId"?: string;
    /**
     * 数据检测状态。取值：
     * - **0**：就绪。
     * - **1**：运行中。
     * - **2**：连通性测试中。
     * - **3**：连通性测试通过。
     * - **4**：连通性测试未通过.
     * @example `3`
     */
    "CheckStatus"?: number;
    /**
     * 审计状态。取值：
     * - **1**：开启审计。
     * - **0**：关闭审计。
     * @example `1`
     */
    "AuditStatus"?: number;
    /**
     * 数据库类型。取值：**MySQL**，**SQLServer**，**Oracle**，**PostgreSQL**，**MongoDB**等。
     * @example `MySQL`
     */
    "EngineType"?: string;
    /**
     * 脱敏权限状态。取值：
     * - **1**：开启。
     * - **0**：关闭。
     * @example `1`
     */
    "DatamaskStatus"?: number;
    /**
     * 识别权限状态。取值：
     * - **1**：开启。
     * - **0**：关闭。
     * @example `1`
     */
    "Enable"?: number;
    /**
     * 创建开始时间。格式：时间戳。单位：毫秒。
     * @example `1616068534877`
     */
    "StartTime"?: number;
    /**
     * 创建结束时间。格式：时间戳。单位：毫秒。
     * @example `1616068534877`
     */
    "EndTime"?: number;
    /**
     * 成员账号ID。
     * @example `**********8103`
     */
    "MemberAccount"?: number;
    /**
     * 该参数已废弃。
     * @example `2`
     */
    "FeatureType"?: number;
}
