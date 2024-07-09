export interface ListDNSServiceRulesRequest {
    /**
     * 云连接器实例ID。
     * @example `iotcc-1y6h8z7imd2yu4****`
     */
    "IoTCloudConnectorId": string;
    /**
     * DNS授权规则ID。
     */
    "DNSServiceRuleIds"?: string[];
    /**
     * DNS授权规则的目标类型。取值：
     * - **Normal**：普通类型。
     * - **DNSRedirect**：重定向类型，重定向类型指将当前DNS服务地址重定向至另一个地址。
     * @example `Normal`
     */
    "ServiceType"?: string;
    /**
     * 目标DNS授权规则IP地址。
     */
    "Destination"?: string[];
    /**
     * DNS授权规则的状态。
     */
    "DNSServiceRuleStatus"?: string[];
    /**
     * DNS授权规则名称。最多支持输入20个规则名称。
     */
    "DNSServiceRuleName"?: string[];
    /**
     * 源DNS授权规则IP地址。
     */
    "Source"?: string[];
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 分批次查询时每次显示的条目数。取值：**1~50**。默认值：**10**。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 云连接器实例所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~313836~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
