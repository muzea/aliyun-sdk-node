export interface ListIpMappingRulesRequest {
    /**
     * 云连接器实例ID。
     * @example `iotcc-bp1odcab8tmno0hdq****`
     */
    "IoTCloudConnectorId": string;
    /**
     * 需要进行IP重定向的授权规则的ID。
     */
    "IpMappingRuleIds"?: string[];
    /**
     * 需要进行重定向的IP地址。
     */
    "MappingIps"?: string[];
    /**
     * 授权规则IP重定向的状态。最多支持20个授权规则IP重定向的状态。取值：
     * - **Creating**：创建中。
     * - **Created**：创建完成。
     * - **Updating**：更新中。
     * - **Associating**：IP绑定中。
     * - **Dissociating**：IP解绑中。
     * - **Deleting**：删除中。
     * - **Deleted**：已删除。
     */
    "IpMappingRuleStatuses"?: string[];
    /**
     * 需要进行IP重定向的授权规则名称。
     */
    "IpMappingRuleNames"?: string[];
    /**
     * 重定向的目标IP地址。
     */
    "DestinationIps"?: string[];
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的**NextToken**值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1**~**100**，默认值为**20**。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 实例所在的地域ID。
     * 您可以通过调用[ListRegions](~~313836~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
