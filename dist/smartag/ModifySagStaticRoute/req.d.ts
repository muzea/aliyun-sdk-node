export interface ModifySagStaticRouteRequest {
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
     * 目标网段。
     * @example `192.XX.XX.0/24`
     */
    "DestinationCidr": string;
    /**
     * 下一跳IP地址。
     * @example `192.XX.XX.1`
     */
    "NextHop": string;
    /**
     * VLAN编码。
     * 取值范围：**0**标识物理口，**1~4094**标识VLAN。
     * @example `1`
     */
    "Vlan"?: string;
}
