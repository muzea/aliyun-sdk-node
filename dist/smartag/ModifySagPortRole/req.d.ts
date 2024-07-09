export interface ModifySagPortRoleRequest {
    /**
     * 智能接入网关实例地域ID。
     * 您可以调用[DescribeRegions](~~69813~~)接口查询智能接入网关支持的地域以及对应的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-whfn****`
     */
    "SmartAGId": string;
    /**
     * 绑定的智能接入网关设备序列号。
     * @example `sag32a30****`
     */
    "SmartAGSn": string;
    /**
     * 端口名称。
     * @example `0`
     */
    "PortName": string;
    /**
     * 端口角色。取值：
     * - **NONE**：端口未分配角色。
     * - **WAN**：用于接入Internet的端口。智能接入网关设备5号端口默认为WAN口，支持DHCP client、PPPoE或静态IP接入方式。
     * - **LAN**：用于接入本地PC或交换机的端口，支持DHCP server或静态IP接入方式。
     * - **ECC**：用于接入专线的端口。
     * - **MGT**：用于管理的端口。智能接入网关设备2号端口默认为独占管理口。
     * > -  管理口独占模式下管理流量和业务流量分离，独占的管理口只能用于访问智能接入网关设备Web管理控制台，不能用于传输业务流量；且只可通过管理口访问智能接入网关设备Web管理控制台。
     * - WAN口支持即插即用模式，第一个通过DHCP获取到IP地址且能够访问Internet的端口会被设置为WAN口；可在Web管理控制台修改WAN口分配。
     * @example `NONE`
     */
    "Role": string;
}
