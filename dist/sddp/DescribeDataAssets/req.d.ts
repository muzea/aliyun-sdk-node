export interface DescribeDataAssetsRequest {
    /**
     * 指定请求和接收消息的语言类型，默认为**zh_cn**。取值：
     * - **zh_cn**：中文（简体）
     * - **en_us**：英文（美国）
     * @example `zh_cn`
     */
    "Lang"?: string;
    /**
     * 指定要查询资产的关键词，支持模糊查询。
     * @example `test`
     */
    "Name"?: string;
    /**
     * 指定要查询的数据资产的风险等级，存在多个时使用英文逗号（,）隔开。
     * - **2**：S1，弱风险等级
     * - **3**：S2，中等风险等级
     * - **4**：S3，高风险等级
     * - **5**：S4，最高风险等级
     * @example `2`
     */
    "RiskLevels"?: string;
    /**
     * 指定数据资产命中的敏感数据识别规则唯一标识ID。
     * > 如果根据数据资产命中的敏感数据识别规则来搜索数据资产，敏感数据识别规则的ID可调用[DescribeRules](~~DescribeRules~~)接口获取。
     * @example `11122200`
     */
    "RuleId"?: number;
    /**
     * 指定要查询的数据资产类型。取值：
     * - **1**：MaxCompute项目
     * - **2**：MaxCompute表
     * - **3**：MaxCompute包
     * - **11**：分析型数据库MySQL（ADS）库
     * - **12**：分析型数据库MySQL（ADS）表
     * - **21**：OSS文件桶
     * - **22**：OSS Object
     * - **31**：表格存储实例
     * - **32**：表格存储表
     * - **51**：RDS库
     * - **52**：RDS表
     * - **61**：ECS自建数据库
     * - **62**：ECS自建数据表
     * - **71**：DRDS库
     * - **72**：DRDS表
     * - **81**：PolarDB库
     * - **82**：PolarDB表
     * - **91**：GPDB库
     * - **92**：GPDB表
     * @example `1`
     */
    "RangeId"?: number;
    /**
     * 指定分页查询时，每页显示的数据最大条数。默认值：**20**。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 指定分页查询时，当前页的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
}
