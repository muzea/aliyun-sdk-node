export interface CreateRuleRequest {
    /**
     * 敏感数据识别规则名称。
     * @example `rule-tst`
     */
    "Name": string;
    /**
     * 敏感数据识别规则内容的类型。取值：
     * - **0**：关键字。
     * - **2**：正则表达式。
     * @example `0`
     */
    "Category"?: number;
    /**
     * 敏感数据识别规则的内容，支持正则表达式或关键字类型，用于匹配敏感数据的字段或文本。
     * @example `(?:\\D|^)((?:(?:25[0-4]|2[0-4]\\d|1\\d{2}|[1-9]\\d{1})\\.)(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){2}(?:25[0-5]|2[0-4]\\d|1[0-9]\\d|[1-9]\\d|[1-9]))(?:\\D|$)`
     */
    "Content": string;
    /**
     * 统计表达式。
     * @example `{"time":"24","groupby":"1003","having":[{"key":"2001","value":"50"}]}`
     */
    "StatExpress"?: string;
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
     * 规则的功能类型。取值：
     * - **1**：数据识别规则。
     * - **2**：审计规则。
     * - **3**：异常检测规则。
     * - **99**：自定义规则.
     * @example `1`
     */
    "RuleType"?: number;
    /**
     * 数据资产表中列数据所属产品名称。取值：**MaxCompute**，**OSS**，**ADS**，**OTS**，**RDS**等。
     * @example `RDS`
     */
    "ProductCode"?: string;
    /**
     * 数据资产所属的产品名称对应的ID。取值：
     * - **1**：MaxCompute
     * - **2**：OSS
     * - **3**：ADS
     * - **4**：OTS
     * - **5**：RDS
     * - **6**：SELF_DB
     * @example `2`
     */
    "ProductId"?: number;
    /**
     * 危险等级。取值：
     * - **1**：低危。
     * - **2**：中危。
     * - **3**：高危。
     * @example `2`
     */
    "WarnLevel"?: number;
    /**
     * 规则描述。
     * @example `身份证`
     */
    "Description"?: string;
    /**
     * 内容类型，取值：
     * - **1**：SQL注入尝试利用。
     * - **2**：SQL注入尝试绕过。
     * - **3**：存储过程滥用。
     * - **4**：缓冲区溢出。
     * - **5**：基于报错的SQL注入。
     * @example `1`
     */
    "ContentCategory"?: number;
    /**
     * 规则状态。取值：
     * - **1**：开启。
     * - **0**：关闭。
     * @example `1`
     */
    "Status"?: number;
    /**
     * 目标产品编码。取值：**MaxCompute**，**OSS**，**ADS**，**OTS**，**RDS**等。
     * @example `MaxCompute`
     */
    "Target"?: string;
    /**
     * 匹配类型。取值：
     * - **1**：规则匹配。
     * - **2**：词典匹配。
     * @example `1`
     */
    "MatchType"?: number;
    /**
     * 规则支持形态，取值：
     * - **0**：支持全部资产。
     * - **1**：支持结构化资产。
     * - **2**：支持非结构化资产。
     * @example `1`
     */
    "SupportForm"?: number;
    /**
     * 该参数已废弃。
     * @example `106.11.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
}
