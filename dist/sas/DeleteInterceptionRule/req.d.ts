export interface DeleteInterceptionRuleRequest {
    /**
     * 指定要查询的集群的ID。
     * > 您可以调用[DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~)接口获取该参数。
     * @example `cdf629147cc3747d292a3f587xxxxxxxx`
     */
    "ClusterId": string;
    /**
     * 需要删除的规则的id列表。
     */
    "RuleIds"?: number[];
}
