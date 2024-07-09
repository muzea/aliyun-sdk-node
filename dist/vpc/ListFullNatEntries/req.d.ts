export interface ListFullNatEntriesRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF3898`
     */
    "ClientToken"?: string;
    /**
     * 要查询的FULLNAT条目所属的FULLNAT表ID。
     * >**FullNatTableId**和**NatGatewayId**参数至少输入一个。
     * @example `fulltb-gw88z7hhlv43rmb26****`
     */
    "FullNatTableId"?: string;
    /**
     * 要查询的FULLNAT条目ID。
     * @example `fullnat-gw8fz23jezpbblf1j****`
     */
    "FullNatEntryId"?: string;
    /**
     * 要查询的FULLNAT条目的名称。最多支持查询20个FULLNAT条目的名称。
     * 名称长度在2~128个字符之间，以英文字母或中文开头，可包含数字、短划线（-）和下划线（_）。
     */
    "FullNatEntryNames"?: string[];
    /**
     * 要查询的弹性网卡ID。
     */
    "NetworkInterfaceIds"?: string[];
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的**NextToken**值。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1**~**100**，默认值为**20**。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 要查询FULLNAT条目所属VPC NAT网关的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `eu-central-1`
     */
    "RegionId": string;
    /**
     * 转发端口的协议类型，取值：
     * - **TCP**：转发TCP协议的报文。
     * -  **UDP**：转发UDP协议的报文。
     * @example `TCP`
     */
    "IpProtocol"?: string;
    /**
     * 要查询的NAT网关的ID。
     * >**FullNatTableId**和**NatGatewayId**参数至少输入一个。
     * @example `ngw-bp1uewa15k4iy5770****`
     */
    "NatGatewayId"?: string;
    /**
     * 要查询的FULLNAT条目的NAT IP地址。
     * @example `10.0.XX.XX`
     */
    "NatIp"?: string;
    /**
     * 要查询的FULLNAT条目的前端端口值，取值范围：1～65535。
     * @example `443`
     */
    "NatIpPort"?: string;
}
