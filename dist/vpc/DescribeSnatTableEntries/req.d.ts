export interface DescribeSnatTableEntriesRequest {
    /**
     * NAT网关所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * SNAT表ID。
     * > **SnatTableId**和**NatGatewayId**参数至少输入一个。
     * @example `stb-8vbczigrhop8x5u3t****`
     */
    "SnatTableId"?: string;
    /**
     * SNAT条目ID。
     * @example `snat-8vbae8uqh7rjpk7d2****`
     */
    "SnatEntryId"?: string;
    /**
     * 交换机的ID。
     * - 当查询公网NAT网关的SNAT条目时，该参数表示该交换机内的ECS实例均可以通过SNAT规则访问公网。
     * - 当查询VPC NAT网关的SNAT条目时，该参数表示该交换机内的ECS实例均可以通过SNAT规则访问外部网络。
     * @example `vsw-3xbjkhjshjdf****`
     */
    "SourceVSwitchId"?: string;
    /**
     * SNAT条目的源网段。
     * @example `116.22.XX.XX/24`
     */
    "SourceCIDR"?: string;
    /**
     * - 当查询公网NAT网关的SNAT条目时，该参数为SNAT条目中的EIP。
     *
     * - 当查询VPC NAT网关的SNAT条目时，该参数为SNAT条目中的NAT IP地址。
     * @example `116.22.XX.XX`
     */
    "SnatIp"?: string;
    /**
     * SNAT条目的名称。
     * 名称长度为2~128个字符，以大小写字母或中文开头， 可包含数字、下划线（_）和短划线（-）。
     * @example `SnatEntry-1`
     */
    "SnatEntryName"?: string;
    /**
     * 列表的页码，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 要查询的NAT网关的ID。
     * > **SnatTableId**和**NatGatewayId**参数至少输入一个。
     * @example `ngw-bp1uewa15k4iy5770****`
     */
    "NatGatewayId"?: string;
}
