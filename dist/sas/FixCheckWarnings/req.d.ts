export interface FixCheckWarningsRequest {
    /**
     * 访问源的IP地址。
     * @example `165.225.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 风险项ID。
     * > 查询指定风险项和指定服务器下的检查项信息，需要提供风险项ID，该ID可调用[DescribeCheckWarningSummary](~~DescribeCheckWarningSummary~~)接口获取。
     * @example `10354`
     */
    "RiskId"?: number;
    /**
     * 设置需要修复的基线检查项参数。以下是参数解释：
     * - **checkId**： 检查项ID。
     * - **rules**：修复规则（数组格式）。
     *     - **value** ：设置是否选中修复方式。取值：**0**（未选中）、**1**（选中）。
     *     - **ruleId** ：设置修复方式的ID。
     *     - **paramList** ：修复方式列表（数组格式）。
     *                 • **paramName** ：修复方式名称。
     *                 • **value** ：修复方式的具体取值。
     * @example `[{"checkId":8,"rules":[{"ruleId":"rule.ssh_Idle.interval","value":1,"paramList":[{"paramName":"range_val","value":"600"},{"paramName":"range_val","value":"600"}]},{"ruleId":"rule.ssh_Idle.count","value":1,"paramList":[{"paramName":"range_val","value":"3"}]}]}]`
     */
    "CheckParams": string;
    /**
     * 指定待修复的资产实例的唯一标识ID，可调用[DescribeWarningMachines](~~DescribeWarningMachines~~)接口获取。
     * @example `75a417dda5f25edb5bed8f208a9a****,c7e10fd794262a1510d5648f9e5d****`
     */
    "Uuids"?: string;
}
