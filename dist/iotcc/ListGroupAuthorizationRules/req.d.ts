export interface ListGroupAuthorizationRulesRequest {
    /**
     * 实例组ID。
     * @example `iotccg-g00epppbi9di9y****`
     */
    "IoTCloudConnectorGroupId": string;
    /**
     * 授权规则ID。最多支持20个授权规则ID。
     */
    "AuthorizationRuleIds"?: string[];
    /**
     * 访问目标类型。最多支持20个目标类型。取值：
     * - **Cidr**：CIDR地址块。
     * - **Domain**：域名。
     */
    "DestinationType"?: string[];
    /**
     * 访问目标地址。最多支持20个目标地址。
     */
    "Destination"?: string[];
    /**
     * 协议类型。取值：
     * - **tcp**。
     * - **udp**。
     * - **icmp**。
     * - **all**：支持所有协议。
     */
    "Protocol"?: string[];
    /**
     * 目标端口范围。最多支持20个访问目标端口。取值范围：
     * - TCP、UDP协议：1~65535。使用正斜线（/）隔开起始端口和终止端口。例如：1/200。
     * - ICMP协议：-1/-1。
     * - ALL：-1/-1。
     */
    "DestinationPort"?: string[];
    /**
     * 授权规则状态。最多支持20个授权规则状态。取值：
     * - **Creating**：创建中。
     * - **Created**：创建完成。
     * - **Deleting**：删除中。
     * - **Updating**：更新中。
     */
    "AuthorizationRuleStatus"?: string[];
    /**
     * 授权规则的名称。最多支持20个授权规则名称。
     * 名称长度为2~128个字符，以大小写字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
     */
    "AuthorizationRuleName"?: string[];
    /**
     * 访问策略。最多支持20个访问策略。取值：
     * - **Permit**：允许。
     * - **Deny**：拒绝。
     */
    "Policy"?: string[];
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的**NextToken**值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 分批次查询时每次显示的条目数。取值：**1**~**50**。默认值：**10**。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 实例组所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 授权规则的类型。取值：
     * - **System**，表示授权规则的类型为系统类型。
     * - **Customer**：表示授权规则的类型为自定义类型。
     * - **Default**：表示授权规则的类型为默认类型。
     * @example `System`
     */
    "Type"?: string;
}
