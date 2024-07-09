export interface ModifySagRemoteAccessRequest {
    /**
     * 智能接入网关实例ID。
     * @example `sag-r79m060r6oy55******`
     */
    "SmartAGId": string;
    /**
     * 智能接入网关设备序列号。
     * @example `sag-100-v1p7-9`
     */
    "SerialNumber": string;
    /**
     * 远程访问IP。
     * @example `10.10.10.2`
     */
    "RemoteAccessIp"?: string;
}
