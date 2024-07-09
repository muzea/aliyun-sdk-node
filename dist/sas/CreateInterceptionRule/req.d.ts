export interface CreateInterceptionRuleRequest {
    /**
     * 指定要查询的容器集群的ID。
     * > 您可以调用[DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~)接口获取该参数。
     * @example `c35xxxa416`
     */
    "ClusterId": string;
    /**
     * 配置规则名称。
     * @example `test-rule-1`
     */
    "RuleName": string;
    /**
     * 指定启用规则的开关状态。取值：
     * - **0**：关闭
     * - **1**：开启
     * @example `0`
     */
    "RuleSwitch": number;
    /**
     * 源对象。包含的参数说明如下：
     * - targetId：源对象ID，您可以调用[ListInterceptionTargetPage](~~ListInterceptionTargetPage~~)接口获取该参数。
     * @example `{"targetId":301940}`
     */
    "SrcTarget"?: any;
    /**
     * 目的对象列表。包含的参数说明如下：
     * - targetId：目的对象ID，您可以调用[ListInterceptionTargetPage](~~ListInterceptionTargetPage~~)接口获取该参数。
     * - ports：目标端口范围列表。
     * @example `[
          {
                "targetId": 600036,
                "ports": [
                      "1/65535"
                ]
          }
    ]`
     */
    "DstTargetList"?: any;
    /**
     * 规则类型。取值：
     * - customize：用户规则
     * @example `customize`
     */
    "RuleType"?: string;
    /**
     * 集群名称。
     * @example `sas-test-cnnf`
     */
    "ClusterName": string;
    /**
     * 规则优先级，取值为1~1000，数字越小优先级越高。
     * @example `1`
     */
    "OrderIndex": number;
    /**
     * 拦截模式。取值：
     * - **1**：拦截模式
     * - **2**：告警模式
     * - **3**：放行模式
     * @example `1`
     */
    "InterceptType": number;
}
