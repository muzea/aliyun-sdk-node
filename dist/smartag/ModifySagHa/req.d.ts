export interface ModifySagHaRequest {
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
     * HA模式。取值：
     * - **NONE**：HA功能不开启。
     * - **STATIC**：静态模式。
     * - **DYNAMIC**：动态模式。
     * @example `NONE`
     */
    "Mode": string;
    /**
     * 端口名称。
     * >如果HA模式选择静态模式，需要输入端口名称。
     * @example `5`
     */
    "PortName"?: string;
    /**
     * 虚IP地址。
     * >如果HA模式选择静态模式，需要输入虚IP地址。
     * @example `192.XX.XX.5`
     */
    "VirtualIp"?: string;
}
