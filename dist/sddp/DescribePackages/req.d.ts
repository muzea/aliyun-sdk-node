export interface DescribePackagesRequest {
    /**
     * 请求和接收消息的语言类型，默认为**zh_cn**。取值：
     * - **zh_cn**：中文。
     * - **en_us**：英文。
     * @example `zh_cn`
     */
    "Lang"?: string;
    /**
     * 搜索的关键词，支持模糊匹配。
     * @example `test`
     */
    "Name"?: string;
    /**
     * 数据资产包所属产品ID。
     * > 如果根据数据资产包所属产品ID查询SDPP连接授权的MaxCompute的数据资产包列表，产品ID可调用**DescribeDataAssets**接口获取。
     * @example `2566600`
     */
    "ProductId"?: number;
    /**
     * 数据资产包的风险等级ID。
     * - **1**：N/A：未识别到敏感数据。
     * - **2**：S1：1级敏感数据。
     * - **3**：S2：2级敏感数据。
     * - **4**：S3：3级敏感数据。
     * - **5**：S4：4级敏感数据。
     * @example `2`
     */
    "RiskLevelId"?: number;
    /**
     * 数据资产包命中的敏感数据识别规则ID。
     * > 如果根据数据资产包命中的敏感数据识别规则ID查询SDPP连接授权的MaxCompute的数据资产包列表，敏感数据识别规则ID可调用**DescribeRules**接口获取。
     * @example `266666`
     */
    "RuleId"?: number;
    /**
     * 数据资产包所属资产实例ID。
     * > 如果根据数据资产包所属资产实例的ID查询SDPP连接授权的MaxCompute的数据资产包列表，资产实例ID可调用**DescribeInstances**接口获取。
     * @example `12321`
     */
    "InstanceId"?: number;
    /**
     * 分页查询时，每页显示的数据最大条数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询时的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
}
