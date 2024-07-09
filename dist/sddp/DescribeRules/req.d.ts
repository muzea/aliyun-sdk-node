export interface DescribeRulesRequest {
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 列表每页显示的数据最大条数。
     * @example `12`
     */
    "PageSize"?: number;
    /**
     * 分页查询时的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 敏感数据识别规则的类型。取值：
     * - **0**：表示系统内置。
     * - **1**：表示用户自定义。
     * @example `1`
     */
    "CustomType"?: number;
    /**
     * 敏感数据识别规则内容的类型。取值：
     * - **0**：关键字。
     * - **2**：正则表达式。
     * @example `2`
     */
    "Category"?: number;
    /**
     * 敏感数据识别规则名称，支持模糊匹配。
     * @example `***规则`
     */
    "Name"?: string;
    /**
     * 敏感数据识别规则的敏感等级ID。取值：
     * - **1**：N/A：未识别到敏感数据。
     * - **2**：S1：1级敏感数据。
     * - **3**：S2：2级敏感数据。
     * - **4**：S3：3级敏感数据。
     * - **5**：S4：4级敏感数据。
     * @example `2`
     */
    "RiskLevelId"?: number;
    /**
     * 敏感数据识别规则的类型。取值：
     * - **1**：数据识别规则。
     * - **2**：审计规则。
     * - **3**：异常检测规则。
     * - **99**：自定义规则。
     * @example `1`
     */
    "RuleType"?: number;
    /**
     * 匹配类型。取值：
     * - 1：规则匹配。
     * - 2：词典匹配。
     * @example `1`
     */
    "MatchType"?: number;
    /**
     * 数据资产所属的产品名称。取值：**MaxCompute、OSS、ADS、OTS、RDS**等。
     * @example `MaxCompute`
     */
    "ProductCode"?: number;
    /**
     * 数据资产所属的产品名称对应的ID。取值：**1**：MaxCompute，**2**：OSS，**3**：ADS，**4**：OTS，**5**：RDS等。
     * @example `1`
     */
    "ProductId"?: number;
    /**
     * 危险等级。
     * - **1**：低危。
     * - **2**：中危。
     * - **3**：高危。
     * @example `2`
     */
    "WarnLevel"?: number;
    /**
     * 内容类型，取值：**1**：SQL注入尝试利用，**2**：SQL注入尝试绕过， **3**：存储过程滥用，**4**：缓冲区溢出，**5**：基于报错的SQL注入等。
     * @example `1`
     */
    "ContentCategory"?: number;
    /**
     * 状态。取值：
     * - **1**：正常。
     * - **0**：停用。
     * @example `1`
     */
    "Status"?: number;
    /**
     * 新旧版关键字是否兼容。
     * - **true**：是。
     * - **false**：否。
     * >旧版请求参数Category的关键字类型取值为0，新版请求参数Category的关键字类型取值为5，根据业务选择是否需要兼容。
     * @example `true`
     */
    "KeywordCompatible"?: boolean;
    /**
     * 规则父类分组。
     * @example `4_1`
     */
    "GroupId"?: string;
    /**
     * 规则支持的数据资产类型，取值：
     * - **0**：支持全部资产。
     * - **1**：支持结构化资产。
     * - **2**：支持非结构化资产。
     * >查询支持结构化资产或非结构化资产时，返回的数据中除包含查询的数据资产类型外，还包含全部资产。
     * @example `1`
     */
    "SupportForm"?: number;
    /**
     * 该参数已废弃。
     * @example `2`
     */
    "FeatureType"?: number;
}
