export interface ModifySagRouteProtocolBgpRequest {
    /**
     * 智能接入网关实例所属地域ID。
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
     * BGP路由器ID。
     * 取值格式为IPv4地址格式。
     * @example `172.XX.XX.1`
     */
    "RouterId": string;
    /**
     * 智能接入网关设备所属自治系统编号。
     * 取值范围：**1~4294967295**。
     * @example `65535`
     */
    "LocalAs": number;
    /**
     * 保持时间。
     * 取值范围：**3~65535**。单位：秒。
     * >在智能接入网关设备和对端设备建立对等体关系时，两端设备要协商Hold Time并保持一致，如果在Hold Time内未收到对端发来的KeepAlive或Update消息，则认为BGP连接中断。
     * @example `9`
     */
    "HoldTime": number;
    /**
     * 存活时间间隔。
     * 取值范围：**0~65535**。单位：秒。
     * @example `3`
     */
    "KeepAlive": number;
}
