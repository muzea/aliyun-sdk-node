export interface DescribeTablesRequest {
    /**
     * 请求和接收消息的语言类型，默认为**zh_cn**。取值：
     * - **zh_cn**：中文。
     * - **en_us**：英文。
     * @example `zh_cn`
     */
    "Lang"?: string;
    /**
     * 搜索的关键词，支持模糊匹配。
     * 例如，输入test，会搜索出搜索项中包含test的全部数据信息。
     * @example `test`
     */
    "Name"?: string;
    /**
     * 数据资产表所属产品ID。该产品ID可调用[DescribeDataAssets](~~DescribeDataAssets~~)接口获取。
     * @example `1`
     */
    "ProductId"?: number;
    /**
     * 数据资产表所属产品名称，包括MaxCompute、OSS、RDS等。关于支持的产品名称，请参见[支持识别敏感数据的数据类型](~~212906~~)。
     * @example `MaxCompute`
     */
    "ProductCode"?: string;
    /**
     * 数据资产表的风险等级ID。
     * 每个风险等级ID都有对应的风险等级名称。取值：
     * - **1**：N/A：未识别到敏感数据。
     * - **2**：S1：1级敏感数据。
     * - **3**：S2：2级敏感数据。
     * - **4**：S3：3级敏感数据。
     * - **5**：S4：4级敏感数据。
     * @example `2`
     */
    "RiskLevelId"?: number;
    /**
     * 数据资产表命中的敏感数据识别规则ID。该敏感数据识别规则ID可调用[DescribeRules](~~DescribeRules~~)接口获取。
     * @example `333322`
     */
    "RuleId"?: number;
    /**
     * 数据资产表所属的资产实例ID。该资产实例ID可调用[DescribeInstances](~~DescribeInstances~~)接口获取。
     * @example `1`
     */
    "InstanceId"?: number;
    /**
     * 数据资产表所属的资产包ID。该资产包ID可调用[DescribePackages](~~DescribePackages~~)接口获取。
     * @example `555555`
     */
    "PackageId"?: number;
    /**
     * 列表中每页显示的数据最大条数。默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询时的页码。默认值：1。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 支持数据安全中心服务的地域。更多信息，请参见[支持的地域](~~214257~~)。
     * @example `cn-hangzhou`
     */
    "ServiceRegionId"?: string;
    /**
     * 行业模版ID
     * @example `1`
     */
    "TemplateId"?: number;
}
