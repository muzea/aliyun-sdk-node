export interface ModifySagLanRequest {
    /**
     * 智能接入网关实例地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-whfn****`
     */
    "SmartAGId": string;
    /**
     * 绑定的智能接入网关设备的序列号。
     * @example `sag32a30****`
     */
    "SmartAGSn": string;
    /**
     * 端口名称。
     * @example `0`
     */
    "PortName": string;
    /**
     * LAN口连接类型。取值：
     * - **DHCP**：动态IP。利用DHCP协议，向连接设备动态下发IP地址。
     * - **STATIC**：静态IP。静态指定LAN口IP地址。
     * @example `STATIC`
     */
    "IPType": string;
    /**
     * LAN口IP地址。
     * @example `192.XX.XX.1`
     */
    "IP": string;
    /**
     * 掩码地址。
     * @example `255.255.255.0`
     */
    "Mask": string;
    /**
     * DHCP地址池起始地址。
     * @example `192.XX.XX.2`
     */
    "StartIp"?: string;
    /**
     * DHCP地址池结束地址。
     * @example `192.XX.XX.254`
     */
    "EndIp"?: string;
    /**
     * DHCP租期。单位分钟。
     * 取值范围：**1~43200**。
     * @example `7`
     */
    "Lease"?: string;
}
