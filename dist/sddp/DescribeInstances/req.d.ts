export interface DescribeInstancesRequest {
    /**
     * 设置请求和接收消息的语言类型，默认为**zh_cn**。
     * 取值：
     * - **zh_cn**：中文（简体）
     * - **en_us**：英文（美国）
     * @example `zh_cn`
     */
    "Lang"?: string;
    /**
     * 设置搜索的关键词，支持模糊匹配。例如，输入data，会搜索出搜索项中包含data的全部数据信息。
     * @example `data`
     */
    "Name"?: string;
    /**
     * 设置数据资产实例所属产品的ID。您可以通过调用[DescribeDataAssets](~~DescribeDataAssets~~)接口获取产品ID。
     * @example `1`
     */
    "ProductId"?: number;
    /**
     * 设置数据资产实例的风险等级ID。风险等级ID越高，表示识别出的数据越敏感。取值：
     * - **1**：表示未识别到敏感数据，无风险。
     * - **2**：表示1级敏感数据风险。
     * - **3**：表示2级敏感数据风险。
     * - **4**：表示3级敏感数据风险。
     * - **5**：表示4级敏感数据风险。
     * - **6**：表示5级敏感数据风险。
     * - **7**：表示6级敏感数据风险。
     * - **8**：表示7级敏感数据风险。
     * - **9**：表示8级敏感数据风险。
     * - **10**：表示9级敏感数据风险。
     * - **11**：表示10级敏感数据风险。
     * @example `2`
     */
    "RiskLevelId"?: number;
    /**
     * 设置数据资产实例命中的敏感数据识别规则ID。该敏感数据识别规则的ID可调用[DescribeRules](~~DescribeRules~~)接口，查看返回参数**Id**获取。
     * @example `1111111`
     */
    "RuleId"?: number;
    /**
     * 设置数据资产实例的地域。更多信息，请参见[支持的地域](~~214257~~)。
     * @example `cn-hangzhou`
     */
    "ServiceRegionId"?: string;
    /**
     * 此参数已废弃。
     * @example `1`
     */
    "FeatureType"?: number;
    /**
     * 设置数据资产实例所属产品的名称，包括MaxCompute、OSS、RDS等。关于支持的产品名称，请参见[支持识别敏感数据的数据类型](~~212906~~)。
     * @example `RDS`
     */
    "ProductCode"?: string;
    /**
     * 分页查询时，设置列表中每页显示的数据资产实例的最大条数。默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询时，设置当前页面的页码。默认值：**1**。
     * @example `1`
     */
    "CurrentPage"?: number;
}
