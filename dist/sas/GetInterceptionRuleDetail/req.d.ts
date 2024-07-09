export interface GetInterceptionRuleDetailRequest {
    /**
     * 指定要查询的容器集群的ID。
     * > 您可以调用[DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~)接口获取该参数。
     * @example `c7f60fdabc84xxx`
     */
    "ClusterId": string;
    /**
     * 规则ID。
     * > 您可以调用[ListInterceptionRulePage](~~ListInterceptionRulePage~~)接口获取该参数。
     * @example `500002`
     */
    "RuleId": string;
}
