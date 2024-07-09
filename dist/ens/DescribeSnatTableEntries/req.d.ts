export interface DescribeSnatTableEntriesRequest {
    /**
     * NAT网关的ID。
     * @example `nat-5tawjw5j7sgd2deujxuk0****`
     */
    "NatGatewayId": string;
    /**
     * SNAT条目的ID。
     * @example `snat-5tfjp36fsrb36zs36faj0****`
     */
    "SnatEntryId"?: string;
    /**
     * SNAT条目中的EIP地址。
     * @example `58.XXXX.XXX.29`
     */
    "SnatIp"?: string;
    /**
     * SNAT条目的源网段。
     * @example `10.1.0.50/32`
     */
    "SourceCIDR"?: string;
    /**
     * SNAT条目的名称。
     * @example `test0`
     */
    "SnatEntryName"?: string;
    /**
     * 查询列表的页码。起始值为**1**。
     * 默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，最大值为**100**行。
     * 默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
}
