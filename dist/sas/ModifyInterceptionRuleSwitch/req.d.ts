export interface ModifyInterceptionRuleSwitchRequest {
    /**
     * 指定要修改的集群的ID。
     * > 您可以调用[DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~)接口获取该参数。
     * @example `ce5c29aba99694ade9ba85dc620b4****`
     */
    "ClusterId"?: string;
    /**
     * 规则的开关状态。取值：
     * - **1**：表示开启。
     * - **0**：表示关闭。
     * @example `1`
     */
    "RuleSwitch"?: number;
    /**
     * 需要操作的规则ID列表，多个ID用英文逗号（,）分隔。
     * > 您可以调用[ListInterceptionRulePage](~~ListInterceptionRulePage~~)接口获取该参数。
     * @example `403287`
     */
    "RuleIds"?: string;
}
