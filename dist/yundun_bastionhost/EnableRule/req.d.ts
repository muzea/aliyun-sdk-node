export interface EnableRuleRequest {
    /**
     * 堡垒机实例的ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-78v1ghxxxxx`
     */
    "InstanceId": string;
    /**
     * 堡垒机的区域ID。
     * > 区域ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 要启用的授权规则ID。
     * > 您可以调用[ListRules](~~2758868~~)接口获取该参数。
     * @example `3`
     */
    "RuleId": string;
}
