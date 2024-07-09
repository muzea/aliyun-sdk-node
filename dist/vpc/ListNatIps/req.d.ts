export interface ListNatIpsRequest {
    /**
     * 要查询的NAT IP地址列表所属NAT网关实例的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `eu-central-1`
     */
    "RegionId": string;
    /**
     * 要查询NAT IP地址所属NAT网关实例ID。
     * @example `ngw-gw8v16wgvtq26vh59****`
     */
    "NatGatewayId": string;
    /**
     * 要查询的NAT IP地址所在的地址段。
     * @example `192.168.0.0/24`
     */
    "NatIpCidr"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会查询NAT IP地址列表。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
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
     * 查询的NAT IP地址的状态。取值：
     * - **Available**：可用状态。
     * - **Deleting**：删除中。
     * - **Creating**：创建中。
     * @example `Available`
     */
    "NatIpStatus"?: string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1**~**100**，默认值为**20**。
     * @example `20`
     */
    "MaxResults"?: string;
    /**
     * 要查询的NAT IP地址的名称。**N**取值为**1**~**20**。
     * @example `test`
     */
    "NatIpName"?: string[];
    /**
     * 要查询的NAT IP地址实例ID。**N**取值为**1**~**20**。
     * @example `vpcnatip-gw8a863sut1zijxh0****`
     */
    "NatIpIds"?: string[];
}
