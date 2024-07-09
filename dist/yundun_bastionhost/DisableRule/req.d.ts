export interface DisableRuleRequest {
    /**
     * 堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-78v1gh****`
     */
    "InstanceId": string;
    /**
     * 堡垒机的地域ID。
     * >地域ID和地域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 要禁用的授权规则ID。
     * > 您可以调用[ListRules](~~2758868~~)接口获取该参数。
     * @example `1`
     */
    "RuleId": string;
}
