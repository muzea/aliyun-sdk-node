export interface DescribeRiskEventGroupRequest {
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**（默认）：表示中文。
     * - **en**：表示英文。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 设置查询开始时间。使用秒级时间戳格式表示。
     * @example `1534408189`
     */
    "StartTime": string;
    /**
     * 设置查询结束时间。使用秒级时间戳格式表示。
     * @example `1534408267`
     */
    "EndTime": string;
    /**
     * 入侵防御事件的流量的方向。取值：
     * - **in**：表示进方向。
     * - **out**：表示出方向。
     * >不设置该参数表示查询所有流量方向。
     * @example `in`
     */
    "Direction"?: string;
    /**
     * 设置分页查询每页包含多少条结果。
     * 默认值为**6**，表示每页包含6条结果。最大值为**10**。
     * @example `6`
     */
    "PageSize"?: string;
    /**
     * 设置分页查询返回第几页数据。
     * 默认值为**1**，表示返回第1页数据。
     * @example `1`
     */
    "CurrentPage"?: string;
    /**
     * 风险事件类型。
     * 唯一取值：**session**，表示入侵防御事件。
     * @example `session`
     */
    "DataType": string;
    /**
     * 入侵防御事件的检测规则来源。取值：
     * - **1**：表示基础防御。
     * - **2**：表示虚拟补丁。
     * - **4**：表示威胁情报。
     * > 不设置该参数表示查询所有规则来源。
     * @example `1`
     */
    "RuleSource"?: string;
    /**
     * 云防火墙的防御状态。取值：
     * - **1**：表示告警。
     * - **2**：表示拦截。
     * > 不设置该参数表示查询所有防御状态。
     * @example `1`
     */
    "RuleResult"?: string;
    /**
     * 要查询的源IP。设置该参数表示查询包含了这条源IP的入侵防御事件。
     * @example `192.0.XX.XX`
     */
    "SrcIP"?: string;
    /**
     * 要查询的目的IP。设置该参数表示查询包含了这条目的IP的入侵防御事件。
     * @example `192.0.XX.XX`
     */
    "DstIP"?: string;
    /**
     * 入侵防御事件的安全等级。取值：
     * - **1**：表示低危。
     * - **2**：表示中危。
     * - **3**：表示高危。
     * > 不设置该参数表示查询所有安全等级。
     * @example `1`
     */
    "VulLevel"?: string;
    /**
     * 云防火墙类型。取值：
     * - **VpcFirewall**：表示VPC边界防火墙。
     * - **InternetFirewall**（默认）：表示互联网边界防火墙。
     * @example `InternetFirewall`
     */
    "FirewallType"?: string;
    /**
     * 源VPC实例ID。
     * > 仅在FirewallType为VpcFirewall时，需要设置该参数。
     * @example `vpc-uf6e9a9zyokj2ywuo****`
     */
    "SrcNetworkInstanceId"?: string;
    /**
     * 目的VPC实例ID。
     * > 仅在FirewallType为VpcFirewall时，需要设置该参数。
     * @example `vpc-uf6e9a9zyokj2ywuo****`
     */
    "DstNetworkInstanceId"?: string;
    /**
     * 入侵防御事件的攻击类型。取值：
     * - **1**：表示异常连接。
     * - **2**：表示命令执行。
     * - **3**：表示暴力破解。
     * - **4**：表示扫描。
     * - **5**：表示其它。
     * - **6**：表示信息泄露。
     * - **7**：表示Dos攻击。
     * - **8**：表示溢出攻击。
     * - **9**：表示Web攻击。
     * - **10**：表示木马后门。
     * - **11**：表示病毒蠕虫。
     * - **12**：表示挖矿行为。
     * - **13**：表示反弹Shell。
     * >不设置该参数表示查询全部攻击类型。
     * @example `1`
     */
    "AttackType"?: string;
    /**
     * 是否查询IP地址位置信息。
     * - **true**： 表示不查询IP地理位置信息。
     * - **false**（默认）：表示查询IP地理位置信息。
     * @example `false`
     */
    "NoLocation"?: string;
    /**
     * 被攻击应用的名称的列表，使用`["AttackApp1","AttackApp2"]`格式表示。
     * @example `["MySql","DNS"]`
     */
    "AttackApp"?: string[];
    /**
     * 购买版本。取值：
     * - **2**：高级版。
     * - **3**：企业版。
     * - **4**：旗舰版。
     * - **10**：按量付费版。
     * @example `10`
     */
    "BuyVersion"?: number;
    /**
     * 根据指定字段排序。取值：
     * - **VulLevel**（默认）：根据风险等级排序。
     * - **LastTime**：根据最近发生时间排序。
     * @example `LastTime`
     */
    "Sort"?: string;
    /**
     * 排序方式。取值：
     * - **asc**：升序。
     * -  **desc**（默认）：降序。
     * @example `desc`
     */
    "Order"?: string;
    /**
     * 入侵防御事件名称。
     * @example `木马后门通信`
     */
    "EventName"?: string;
}
