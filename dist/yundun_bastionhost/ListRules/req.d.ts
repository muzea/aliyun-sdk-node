export interface ListRulesRequest {
    /**
     * 堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-5yd34ol020a`
     */
    "InstanceId": string;
    /**
     * 堡垒机的地域ID。
     * > Region ID和地域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 指定分页查询时，当前页的页码。默认值为1。
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 指定分页查询时，每页显示的数据最大条数。
     * PageSize参数最大取值为100。每页默认显示的数据条数为20条，PageSize参数值为空时，将默认返回20条数据。
     * > 建议PageSize取值不要为空。
     * @example `20`
     */
    "PageSize"?: string;
    /**
     * 指定要查询的授权规则名称。仅支持精确查询。
     * @example `rule`
     */
    "RuleName"?: string;
    /**
     * 指定要查询的授权规则状态。
     * - **Enabled**：正常
     * - **Disabled**：已禁用
     * @example `Enabled`
     */
    "RuleState"?: string;
}
