export interface CreateNatIpCidrRequest {
    /**
     * 待创建的NAT IP地址段所属的NAT网关实例的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `eu-central-1`
     */
    "RegionId": string;
    /**
     * 创建NAT IP地址段所属的VPC NAT网关实例ID。
     * @example `ngw-gw8v16wgvtq26vh59****`
     */
    "NatGatewayId": string;
    /**
     * NAT IP地址段的名称。
     * 长度为2~128个字符，必须以字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。但不能以`http://`或`https://`开头。
     * @example `newcidr`
     */
    "NatIpCidrName"?: string;
    /**
     * NAT IP地址段的描述信息。
     * 长度为2~256个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
     * @example `mycidr`
     */
    "NatIpCidrDescription"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会创建NAT IP地址段。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF3898`
     */
    "ClientToken"?: string;
    /**
     * 创建的NAT IP地址段。
     * 新建的地址段必须满足以下条件：
     * - 属于10.0.0.0/8、172.16.0.0/12或192.168.0.0/16网段及其子网。
     * - 支持的子网掩码位数范围为16至32位。
     * - 不能与VPC NAT网关所属VPC的私网网段重叠。如果您需要将私网地址转换为VPC私网网段内的其他地址，请在对应的VPC私网网段内创建交换机，然后在该交换机中创建新的VPC NAT网关提供私网地址转换服务。
     * - 如需使用公网地址段作为NAT IP地址段，则该地址段必须属于VPC NAT网关所属VPC的用户网段。关于用户网段的更多信息，请参见[什么是用户网段](~~185311~~)。
     * @example `172.16.0.0/24`
     */
    "NatIpCidr": string;
}
