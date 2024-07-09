export interface DeleteRuleRequest {
    /**
     * 指定要删除的授权规则所在堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 指定要删除授权规则的堡垒机的区域ID。
     * > 区域ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 要删除的授权规则ID。
     * > 您可以调用[ListRules](~~2758868~~)接口获取该参数。
     * @example `5`
     */
    "RuleId": string;
}
