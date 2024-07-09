export interface DescribeRiskCheckResultRequest {
    /**
     * 访问源的IP地址。
     * @example `1.2.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 要查询的检查项类型。取值：
     * - **1**：身份认证及权限
     * - **2**：网络访问控制
     * - **3**：日志审计
     * - **4**：数据安全
     * - **5**：监控告警
     * - **6**：基础安全防护
     * > 不设置检查项类型，默认查询所有检查项类型。
     * @example `1`
     */
    "GroupId"?: number;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 要查询的检查项风险等级。取值：
     * - **high**：高危
     * - **medium**：中危
     * - **low**：低危
     * @example `high`
     */
    "RiskLevel"?: string;
    /**
     * 检查结果的状态。取值：
     * -  **pass**：通过
     * - **failed**：失败
     * - **running**：运行中
     * - **waiting**：等待运行
     * - **ignored**：已忽略
     * - **falsePositive**：已标记误报
     * @example `pass`
     */
    "Status"?: string;
    /**
     * 要查询的云产品类型。云产品类型对应的风险检查项详细信息，请参见本文档返回参数后的风险检查项表格。
     * @example `RDS`
     */
    "AssetType"?: string;
    /**
     * 检查项名称。检查项名称及对应的风险检查项详细信息，请参见本文档返回参数后的风险检查项表格。
     * @example `ALB_NetWorkAccessControl`
     */
    "Name"?: string;
    /**
     * 设置分页查询时，每页显示的检查结果的数量。默认值为**20**，表示每页显示20条检查结果。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 检查项的启用状态。取值：
     * - **enabled**：已启用
     * - **disabled**：未启用
     * @example `enabled`
     */
    "QueryFlag"?: string;
    /**
     * 检查项ID。ID值对应的风险检查项详细信息请参见本文档返回参数后的风险检查项表格。
     * @example `1`
     */
    "ItemIds"?: string[];
}
