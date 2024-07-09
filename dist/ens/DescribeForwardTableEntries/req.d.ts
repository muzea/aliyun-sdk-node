export interface DescribeForwardTableEntriesRequest {
    /**
     * NAT网关的ID。
     * @example `nat-5t7nh1cfm6kxiszlttr38****`
     */
    "NatGatewayId": string;
    /**
     * DNAT条目ID。
     * @example `fwd-5tfi6f0rutmd00xrhkag7****`
     */
    "ForwardEntryId"?: string;
    /**
     * DNAT条目中提供公网访问的弹性公网IP地址。
     * @example `36.XXX.XXX.72`
     */
    "ExternalIp"?: string;
    /**
     * 通过DNAT条目进行公网通信的实例的私网IP地址。
     * @example `10.XXX.XXX.50`
     */
    "InternalIp"?: string;
    /**
     * DNAT条目的名称。
     * @example `test0`
     */
    "ForwardEntryName"?: string;
    /**
     * 协议类型，取值：
     * - **TCP**：转发TCP协议的报文。
     * - **UDP**：转发UDP协议的报文。
     * - **Any**：转发所有协议的报文。
     * @example `TCP`
     */
    "IpProtocol"?: string;
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
