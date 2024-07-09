export interface DescribeColumnsV2Request {
    /**
     * 设置请求和接收消息的语言类型，默认为**zh_cn**。
     * 取值：
     * - **zh_cn**：中文（简体）
     * - **en_us**：英文（美国）
     * @example `zh_cn`
     */
    "Lang"?: string;
    /**
     * 搜索的关键词，支持模糊匹配。
     * 例如，输入**test**，会搜索出搜索项中包含**test**的全部数据信息。
     * @example `test`
     */
    "Name"?: string;
    /**
     * MaxCompute、RDS等资产表中的列所属的资产表唯一标识ID。
     * > 根据资产表的ID查询数据安全中心连接授权的数据资产表中列的数据，资产表ID可调用[DescribeTables](~~141709~~)接口获取。
     * @example `11132334`
     */
    "TableId"?: string;
    /**
     * 资产表中列数据命中的敏感数据识别规则的唯一标识ID。
     * > 根据资产表中列数据命中的敏感数据识别规则的ID，查询数据安全中心连接授权的数据资产表中列的数据，敏感数据识别规则ID可调用[DescribeRules](~~141389~~)接口获取。
     * @example `11122200`
     */
    "RuleId"?: number;
    /**
     * 数据资产表中列数据所属产品名称。取值：**MaxCompute、OSS、ADS、OTS、RDS**等。
     * @example `MaxCompute`
     */
    "ProductCode"?: string;
    /**
     * 数据资产表中列数据所属的资产实例ID。
     * > 根据数据资产表中列数据所属的资产实例的ID，查询数据安全中心连接授权的数据资产表中列的数据，资产实例ID可调用[DescribeInstances](~~141708~~)接口获取。
     * @example `1`
     */
    "InstanceId"?: number;
    /**
     * 数据资产表中列数据所属的资产实例名称。
     * @example `rm-bp17t1htja573l5i8****`
     */
    "InstanceName"?: string;
    /**
     * 数据资产表的名称。
     * @example `it_table`
     */
    "TableName"?: string;
    /**
     * 数据资产表中列数据命中的敏感数据识别规则名称。
     * @example `name`
     */
    "RuleName"?: string;
    /**
     * 敏感等级名。取值：
     * - **N/A**：未识别到敏感数据。
     * - **S1**：1级敏感数据。
     * - **S2**：2级敏感数据。
     * - **S3**：3级敏感数据。
     * - **S4**：4级敏感数据。
     * @example `S2`
     */
    "SensLevelName"?: string;
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
    /**
     * 敏感数据识别规则的风险等级ID。取值：
     * - **1**：N/A。
     * - **2**：S1。
     * - **3**：S2。
     * - **4**：S3。
     * - **5**：S4。
     * @example `2`
     */
    "RiskLevelId"?: number;
}
