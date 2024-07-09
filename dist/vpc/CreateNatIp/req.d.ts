export interface CreateNatIpRequest {
    /**
     * 要创建NAT IP地址所属NAT网关实例的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `eu-central-1`
     */
    "RegionId": string;
    /**
     * NAT IP地址所属的VPC NAT网关实例ID。
     * @example `ngw-gw8v16wgvtq26vh59****`
     */
    "NatGatewayId": string;
    /**
     * 创建的NAT IP地址的名称。
     * 长度为2~128个字符，必须以字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。但不能以`http://`或`https://`开头。
     * @example `newnatip`
     */
    "NatIpName"?: string;
    /**
     * 创建的NAT IP地址的描述信息。
     * 长度为2~256个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
     * @example `test`
     */
    "NatIpDescription"?: string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会创建NAT IP地址。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回2xx HTTP状态码并创建NAT IP地址。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF3898`
     */
    "ClientToken"?: string;
    /**
     * 创建NAT IP地址的地址段。
     * @example `192.168.0.0/24`
     */
    "NatIpCidr": string;
    /**
     * 创建的NAT IP地址。
     * 如果您不指定该IP地址，系统会在您的NAT IP地址段中随机分配一个IP地址。
     * @example `192.168.0.34`
     */
    "NatIp"?: string;
}
