export interface ListNatIpCidrsRequest {
    /**
     * 需要查询的NAT IP地址段所属VPC NAT网关的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `eu-central-1`
     */
    "RegionId": string;
    /**
     * 要查询NAT IP地址段的VPC NAT网关的实例ID。
     * @example `ngw-gw8v16wgvtq26vh59****`
     */
    "NatGatewayId": string;
    /**
     * 要查询的NAT IP地址段。
     * @example `172.16.0.0/24`
     */
    "NatIpCidr"?: string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会查询NAT IP地址段列表。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码DryRunOperation。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并查询NAT IP地址段列表。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF3898`
     */
    "ClientToken"?: string;
    /**
     * 要查询的NAT IP地址段的状态。取值：**Available**，表示可用状态。
     * @example `Available`
     */
    "NatIpCidrStatus"?: string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1**~**100**，默认值为**20**。
     * @example `20`
     */
    "MaxResults"?: string;
    /**
     * 要查询的NAT IP地址段的名称。**N**取值为**1**~**20**。
     * @example `test`
     */
    "NatIpCidrName"?: string[];
    /**
     * 要查询的NAT IP地址段。**N**取值为**1**~**20**。
     * @example `172.16.0.0/24`
     */
    "NatIpCidrs"?: string[];
}
