export interface DeleteSagStaticRouteRequest {
    /**
     * 智能接入网关App实例所属地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关App实例ID。
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
     * Vlan编码。
     * 取值范围：**0**标识物理口，**1~4094**标识Vlan。
     * @example `1`
     */
    "Vlan"?: string;
}
