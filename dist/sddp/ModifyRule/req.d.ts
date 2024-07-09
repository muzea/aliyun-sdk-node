export interface ModifyRuleRequest {
    /**
     * 请求和接收消息的语言类型，默认值为**zh_cn**。取值：
     * - **zh_cn**：中文（简体）。
     * - **en_us**：英文（美国）。
     * @example `zh_cn`
     */
    "Lang"?: string;
    /**
     * 敏感数据识别规则的唯一标识ID。
     * 您可以通过调用[DescribeRules](~~DescribeRules~~)接口获取标识ID。
     * @example `1****`
     */
    "Id": number;
    /**
     * 敏感数据识别规则的名称。
     * 您可以通过调用[DescribeRules](~~DescribeRules~~)接口获取规则的名称。
     * @example `esw`
     */
    "Name": string;
    /**
     * 敏感数据识别规则内容的类型。取值：
     * - **2**：表示正则表达式。
     * - **3**：表示算法。
     * - **5**：表示关键字。
     * @example `2`
     */
    "Category"?: number;
    /**
     * 敏感数据识别规则内容。支持正则表达式、算法、关键字类型，用于匹配敏感数据的字段或文本。
     * @example `(?:\\D|^)((?:(?:25[0-4]|2[0-4]\\d|1\\d{2}|[1-9]\\d{1})\\.)(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){2}(?:25[0-5]|2[0-4]\\d|1[0-9]\\d|[1-9]\\d|[1-9]))(?:\\D|$)`
     */
    "Content": string;
    /**
     * 敏感数据识别规则的风险等级ID。取值：
     * - **1**：N/A：未识别到敏感数据。
     * - **2**：S1：1级敏感数据。
     * - **3**：S2：2级敏感数据。
     * - **4**：S3：3级敏感数据。
     * - **5**：S4：4级敏感数据。
     * @example `2`
     */
    "RiskLevelId"?: number;
    /**
     * 敏感数据识别规则的规则类型。取值：
     * - **1**：表示数据识别规则类型。
     * - **2**：表示审计规则类型。
     * - **3**：表示异常事件规则类型。
     * @example `1`
     */
    "RuleType"?: number;
    /**
     * 指定待查询包含敏感数据识别规则的产品对应的产品资源类型。取值：**MaxCompute、OSS、ADS、OTS、RDS**等。
     * @example `RDS`
     */
    "ProductCode"?: string;
    /**
     * 包含敏感数据识别规则的产品对应的产品ID。取值：**1**：MaxCompute，**2**：OSS，**3**：ADS，**4**：OTS，**5**：RDS等。
     * @example `5`
     */
    "ProductId"?: number;
    /**
     * 敏感数据识别规则的风险等级。取值：
     * - **1**：表示低风险等级。
     * - **2**：表示中风险等级。
     * - **3**：表示高风险等级。
     * @example `1`
     */
    "WarnLevel"?: number;
    /**
     * 匹配类型。取值：
     * - **1**：规则匹配。
     * - **2**：词典匹配。
     * @example `1`
     */
    "MatchType"?: number;
    /**
     * 规则支持的数据资产类型，取值：
     * - **0**：支持全部资产。
     * - **1**：支持结构化资产。
     * - **2**：支持非结构化资产。
     * @example `1`
     */
    "SupportForm"?: number;
}