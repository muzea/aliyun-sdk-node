export interface ModifySagWanRequest {
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
     * 智能接入网关设备序列号。
     * @example `sag32a30****`
     */
    "SmartAGSn": string;
    /**
     * WAN口所属的端口号。
     * @example `0`
     */
    "PortName": string;
    /**
     * WAN口连接类型。取值：
     * - **DHCP**：通过DHCP协议动态获取IP地址，进而访问互联网。
     * - **STATIC**：通过静态指定IP地址，进而访问互联网。此种方式需要为WAN口配置静态IP地址、地址掩码及网关IP地址。
     * - **PPPOE**：通过拨号方式接入互联网。此种方式需要输入运营商提供的PPPOE账号和密码。
     * @example `DHCP`
     */
    "IPType": string;
    /**
     * WAN口IP地址。
     * >IPType为STATIC时需要输入。
     * @example `192.XX.XX.1`
     */
    "IP"?: string;
    /**
     * WAN口IP地址掩码。
     * >IPType为STATIC时需要输入。
     * @example `255.255.255.0`
     */
    "Mask"?: string;
    /**
     * 网关IP地址。
     * > - IPType为STATIC时需要输入。
     * - 配置网关后，智能接入网关设备会自动生成一条默认路由。
     * @example `192.XX.XX.254`
     */
    "Gateway"?: string;
    /**
     * PPPOE账号。
     * 长度为6~30位字符，可包含数字、大小写字母。
     *
     * >IPType为PPPOE时需要输入。
     * @example `P12ppp***`
     */
    "Username"?: string;
    /**
     * PPPOE密码。
     * 长度为6~30位字符，可包含数字、大小写字母。
     *
     * >IPType为PPPOE时需要输入。密码不修改时可以不指定该项。
     * @example `P12ppq***`
     */
    "Password"?: string;
    /**
     * WAN口优先级。
     * 取值范围：**-1**或**1~50**。
     * 数值越小优先级越高。**-1**表示该WAN口不启用流量转发。
     * @example `1`
     */
    "Priority"?: number;
    /**
     * WAN口权重。
     * 取值范围：**1~100**。默认值：**100**。
     * @example `100`
     */
    "Weight"?: number;
    /**
     * WAN口连接的运营商链路。取值：
     * - **CT**：电信
     * - **CM**：移动
     * - **CU**：联通
     * - **Other**：其他
     * @example `CT`
     */
    "ISP"?: string;
    /**
     * WAN口的限速带宽。单位：Mbps。
     * @example `50`
     */
    "Bandwidth"?: number;
}
