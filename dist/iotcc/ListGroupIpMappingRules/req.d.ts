export interface ListGroupIpMappingRulesRequest {
    /**
     * 云连接器实例组ID。
     * @example `iotccg-g00epppbi9di9y****`
     */
    "IoTCloudConnectorGroupId": string;
    /**
     * 需要进行IP重定向的授权规则的ID。最多支持20个授权规则ID。
     */
    "IpMappingRuleIds"?: string[];
    /**
     * 重定向的目标IP地址。最多支持20个目标IP地址。
     */
    "DestinationIps"?: string[];
    /**
     * 授权规则IP重定向的状态。最多支持20个授权规则IP重定向的状态。
     */
    "IpMappingRuleStatuses"?: string[];
    /**
     * 需要进行IP重定向的授权规则名称。最多支持20个授权规则名称。
     */
    "IpMappingRuleNames"?: string[];
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1**~**100**，默认值为**20**。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 实例组所在的地域ID。
     * 您可以通过调用[ListRegions](~~313836~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 需要进行重定向的IP地址。最多支持20个重定向的IP地址。
     */
    "MappingIps"?: string[];
}
