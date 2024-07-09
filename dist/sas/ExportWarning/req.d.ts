export interface ExportWarningRequest {
    /**
     * 访问源的IP地址。
     * @example `192.0.XX.XX`
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
     * 要导出基线检查结果列表的服务器资产的UUID。多个UUID之间使用半角逗号（,）分隔。
     * @example `inet-7c676676-06fa-442e-90fb-b802e****,inet-7c676676-06fa-442e-90fb-b****`
     */
    "Uuids"?: string;
    /**
     * 设置要导出的基线检查结果所属的基线类型。
     * > 调用[DescribeRiskType](~~DescribeRiskType~~)接口返回的**TypeName**字段。**TypeName**、**TypeNames**这两个参数同时设置时，仅**TypeName**生效。
     * @example `hc_container`
     */
    "TypeName"?: string;
    /**
     * 设置要导出的基线检查结果所属的基线类型。多个类型之间使用半角逗号（,）分隔。
     * > 调用[DescribeRiskType](~~DescribeRiskType~~)接口返回的**TypeName**字段。**TypeName**、**TypeNames**这两个参数同时设置时，仅**TypeName**生效。
     * @example `hc_container,cis`
     */
    "TypeNames"?: string;
    /**
     * 设置要导出的基线检查结果所属的基线子类型。多个子类型之间使用半角逗号（,）分隔。
     * > 调用[DescribeRiskType](~~DescribeRiskType~~)接口返回的**SubTypes**字段下的**TypeName**字段。
     * @example `hc_middleware_ack_master`
     */
    "SubTypeNames"?: string;
    /**
     * 基线的风险等级。多个风险等级之间使用半角逗号（,）分隔。取值：
     * - **high**：高危
     * - **medium**：中危
     * - **low**：低危
     * @example `high,medium`
     */
    "RiskLevels"?: string;
    /**
     * 基线检查结果的风险项的状态。多个状态值之间使用半角逗号（,）分隔。取值：
     * - **3**：已通过
     * - **1**：未通过
     * @example `1,3`
     */
    "StatusList"?: string;
    /**
     * 基线的名称。
     * @example `Alibaba Cloud Standard - Windows 2016/2019  Security Baseline`
     */
    "RiskName"?: string;
    /**
     * 基线问题是否已处理。取值：
     * - **Y**：已处理
     * - **N**：未处理
     * @example `N`
     */
    "Dealed"?: string;
    /**
     * 基线检查结果是否汇总导出。取值：
     * - **0**：否
     * - **1**：是
     * @example `1`
     */
    "IsSummaryExport"?: number;
    /**
     * 基线检查策略的策略ID。
     * @example `12`
     */
    "StrategyId"?: number;
    /**
     * 基线检查结果的风险项ID。多个风险项ID之间使用半角逗号（,）分隔。
     * @example `123,124`
     */
    "RiskIds"?: string;
    /**
     * 导出任务的类型。固定取值为**hc\_check_warning**，表示导出基线检查结果。
     * @example `hc_check_warning`
     */
    "ExportType"?: string;
    /**
     * 弱口令基线检查结果的导出方式。取值：
     * - **0**：弱口令进行脱敏后导出
     * - **1**：弱口令直接明文导出
     * @example `0`
     */
    "IsCleartextPwd"?: number;
    /**
     * 服务器的分组ID。
     * > 您可调用[DescribeAllGroups](~~DescribeAllGroups~~)接口获取服务器的分组ID。
     * @example `13007754`
     */
    "GroupId"?: number;
}
