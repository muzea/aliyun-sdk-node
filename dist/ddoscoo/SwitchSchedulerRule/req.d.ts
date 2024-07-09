export interface SwitchSchedulerRuleRequest {
    /**
     * 要操作的流量调度规则的名称。
     * > 您可以调用[DescribeSchedulerRules](~~157481~~)查询所有流量调度规则的名称。
     * @example `testrule`
     */
    "RuleName": string;
    /**
     * 流量调度规则的类型。取值：
     * - **2**：表示阶梯防护规则。
     * - **3**：表示出海加速规则。
     * - **5**：表示CDN联动规则。
     * - **6**：表示云产品联动规则。
     * @example `6`
     */
    "RuleType": number;
    /**
     * 业务流量切换操作的配置。使用JSON数组转化的字符串表示，JSON数组的每个元素是一个结构体，结构体包含以下字段：
     * -  **Value**：String类型 | 必选 | 联动资源的IP地址。
     * - **State**：Integer类型 | 必选 | 操作类型。取值：
     *     - **0**：表示将业务流量从联动资源切换到DDoS高防实例进行清洗。
     *     - **1**：表示将业务流量回切到联动资源。
     * - **Interval**：Integer类型 | 可选 | 回切时间，单位：分钟。使用说明：
     *     - **State**为**0**（表示切换到高防时），必须设置该参数为**-1**，否则会调用失败。
     *     - **State**为**1**（表示回切到云资源时，无需设置该参数。
     * @example `[{"Value":"39.104.XX.XX","State":0,"Interval":-1}]`
     */
    "SwitchData": string;
}
