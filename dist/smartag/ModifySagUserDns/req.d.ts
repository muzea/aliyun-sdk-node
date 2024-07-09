export interface ModifySagUserDnsRequest {
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
     * 主DNS服务器IP地址。
     * > 不设置会清空DNS配置。
     * @example `192.XX.XX.1`
     */
    "MasterDns"?: string;
    /**
     * 备DNS服务器IP地址。
     * > 不设置会清空备用DNS配置。
     * @example `192.XX.XX.2`
     */
    "SlaveDns"?: string;
}
