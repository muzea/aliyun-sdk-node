export interface UpdateAuthorizationRuleAttributeRequest {
    /**
     * 云连接器实例ID。
     * @example `iotcc-bp1odcab8tmno0hdq****`
     */
    "IoTCloudConnectorId": string;
    /**
     * 授权规则ID。
     * @example `ar-1234abcb8tmno0hdq****`
     */
    "AuthorizationRuleId": string;
    /**
     * 访问目标类型。
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
     * @example `192.168.XX.XX`
     */
    "Destination"?: string;
    /**
     * 访问策略。
     * - **Permit**：允许。
     * - **Deny**：拒绝。
     * @example `Permit`
     */
    "Policy"?: string;
    /**
     * 源CIDR地址块。最多支持传入20个源CIDR地址块。
     */
    "SourceCidrs"?: string[];
    /**
     * 授权规则名称。
     * 名称长度为2~128个字符，以大小写字母或中文开头，可包含数字、下划线（_）或短划线（-）。
     * @example `rule01`
     */
    "AuthorizationRuleName"?: string;
    /**
     * 授权规则描述。
     * 长度为2~256个字符，开头必须为大小写英文字母或中文，但不能为`http://`或`https://`。
     * @example `rule01`
     */
    "AuthorizationRuleDescription"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会更新授权规则。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后直接更新授权规则。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 云连接器实例所在的地域ID。
     * 您可以通过调用[ListRegions](~~313836~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
