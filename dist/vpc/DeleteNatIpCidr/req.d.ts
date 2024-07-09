export interface DeleteNatIpCidrRequest {
    /**
     * 要删除的NAT IP地址段所属NAT网关实例的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `eu-central-1`
     */
    "RegionId": string;
    /**
     * 要删除的NAT IP地址段。
     * - 删除NAT IP地址段前需要将该地址段中的NAT IP地址全部删除。
     * - 默认NAT IP地址段不能删除。
     * @example `172.16.0.0/24`
     */
    "NatIpCidr": string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会删除NAT IP地址段。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回2xx HTTP状态码并删除NAT IP地址段。
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
     * 要删除NAT IP地址段所属的NAT网关实例ID。
     * @example `ngw-gw8v16wgvtq26vh59****`
     */
    "NatGatewayId": string;
}
