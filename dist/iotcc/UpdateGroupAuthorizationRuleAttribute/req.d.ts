export interface UpdateGroupAuthorizationRuleAttributeRequest {
    /**
     * 实例组ID。
     * @example `iotccg-g00epppbi9di9y****`
     */
    "IoTCloudConnectorGroupId": string;
    /**
     * 授权规则的描述信息。
     * 长度为2~256个字符，必须以字母或中文开头，但不能以`http://` 或`https://`开头。
     * @example `rule`
     */
    "AuthorizationRuleDescription"?: string;
    /**
     * 授权规则的名称。
     * 名称长度为2~128个字符，以大小写字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
     * @example `ruletest`
     */
    "AuthorizationRuleName"?: string;
    /**
     * 要修改的授权规则ID。
     * @example `gar-ez91t41jvi6tr8****`
     */
    "AuthorizationRuleId": string;
    /**
     * 源CIDR地址块。N的取值范围：**1**~**20**。
     */
    "SourceCidrs"?: string[];
    /**
     * 访问目标类型。取值：
     * - **Cidr**：CIDR地址块。
     * - **Domain**：域名。
     * @example `Cidr`
     */
    "DestinationType"?: string;
    /**
     * 目标端口范围。取值范围：
     * - TCP、UDP协议：1~65535。使用正斜线（/）隔开起始端口和终止端口。例如：1/200。
     * - ICMP协议：-1/-1。
     * - ALL：-1/-1。
     * @example `80/80`
     */
    "DestinationPort"?: string;
    /**
     * 协议类型。取值：
     * - **tcp**。
     * - **udp**。
     * - **icmp**。
     * - **all**：支持所有协议。
     * @example `tcp`
     */
    "Protocol"?: string;
    /**
     * 访问目标。
     * @example `47.0.XX.XX`
     */
    "Destination"?: string;
    /**
     * 访问策略。取值：
     * - **Permit**：允许。
     * - **Deny**：拒绝。
     * @example `Permit`
     */
    "Policy"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会修改实例组的授权规则。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `true`
     */
    "DryRun"?: boolean;
    /**
     * 实例组所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
