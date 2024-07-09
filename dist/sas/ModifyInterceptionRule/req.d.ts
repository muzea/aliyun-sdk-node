export interface ModifyInterceptionRuleRequest {
    /**
     * 规则ID。
     * @example `500018`
     */
    "RuleId": number;
    /**
     * 容器集群的ID。
     * > 您可以调用[DescribeGroupedContainerInstances](~~182997~~)接口获取该参数。
     * @example `c17ef568f81884cdab402decd5fcd****`
     */
    "ClusterId"?: string;
    /**
     * 规则名称。
     * @example `tetsRule`
     */
    "RuleName"?: string;
    /**
     * 规则的开关状态。取值：
     * - **1**：表示开启
     * - **0**：表示关闭
     * @example `1`
     */
    "RuleSwitch"?: number;
    /**
     * 源规则对象。包含的参数说明如下：
     * - targetId：源对象ID，您可以调用[ListInterceptionTargetPage](~~ListInterceptionTargetPage~~)接口获取该参数。
     * @example `{"targetId":400989}`
     */
    "SrcTarget"?: any;
    /**
     * 目的对象。包含的参数说明如下：
     * - targetId：目的对象ID，您可以调用[ListInterceptionTargetPage](~~ListInterceptionTargetPage~~)接口获取该参数。
     * - ports：目标端口范围列表。
     * @example `{"targetId":600069,"ports":["80/8088"]}`
     */
    "DstTarget"?: any;
    /**
     * 拦截模式。取值：
     * - **1**：拦截模式
     * - **2**：告警模式
     * - **3**：放行模式
     * @example `1`
     */
    "InterceptType"?: number;
    /**
     * 规则的优先级，优先级为1~1000，数字越小优先级越高。
     * @example `1`
     */
    "OrderIndex"?: number;
}
