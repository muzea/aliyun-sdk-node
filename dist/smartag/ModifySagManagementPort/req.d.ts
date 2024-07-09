export interface ModifySagManagementPortRequest {
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
     * 绑定的智能接入网关设备序列号。
     * @example `sag32a30****`
     */
    "SmartAGSn": string;
    /**
     * 管理口IP地址。
     * @example `192.XX.XX.1`
     */
    "IP": string;
    /**
     * 管理口掩码地址。
     * @example `255.255.255.0`
     */
    "Mask": string;
    /**
     * 管理口网关IP地址。
     * @example `192.XX.XX.254`
     */
    "Gateway"?: string;
}
