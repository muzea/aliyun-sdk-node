export interface CreateGroupIpMappingRuleRequest {
    /**
     * 云连接器实例组ID。
     * @example `iotccg-g00epppbi9di9y****`
     */
    "IoTCloudConnectorGroupId": string;
    /**
     * 需要进行实例组IP重定向的授权规则描述。
     * 长度为2~256个字符，必须以字母或中文开头，但不能以`http:// `或`https://`开头。
     * @example `description`
     */
    "IpMappingRuleDescription"?: string;
    /**
     * 需要进行实例组IP重定向的授权规则名称。
     * 名称长度为2~128个字符，以大小写字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
     * @example `name`
     */
    "IpMappingRuleName"?: string;
    /**
     * 重定向的目标IP地址。
     * @example `192.168.10.8`
     */
    "DestinationIp": string;
    /**
     * 需要进行重定向的IP地址。
     * @example `47.0.XX.XX`
     */
    "MappingIp": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会创建实例组授权规则IP的重定向功能。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 实例组所在的地域ID。
     * 您可以通过调用[ListRegions](~~313836~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
