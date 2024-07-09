export interface ListFirewallRulesRequest {
    /**
     * 指定的轻量应用服务器的实例ID。
     * @example `ace0706b2ac4454d984295a94213****`
     */
    "InstanceId": string;
    /**
     * 指定的轻量应用服务器所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 分页查询时设置的每页行数。
     * 最大值：100。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 防火墙规则列表的页码。
     * 起始值：1。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 防火墙规则的标签列表。
     */
    "Tag"?: {
        /**
         * 防火墙规则的标签键。标签键长度的取值范围：1~64。N 的取值范围：1~20。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 防火墙规则的标签值。标签值长度的取值范围：1~64。N 的取值范围：1~20。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 防火墙规则ID。
     * @example `1a16263ab0f541288312a15fa64280de`
     */
    "FirewallRuleId"?: string;
}
