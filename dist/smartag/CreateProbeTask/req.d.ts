export interface CreateProbeTaskRequest {
    /**
     * 智能接入网关实例所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~69813~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-asdfz6ac74oj5v****`
     */
    "SagId": string;
    /**
     * 智能接入网关设备序列号。
     * @example `sag****`
     */
    "Sn": string;
    /**
     * 拨测任务名称。
     * @example `test-ping`
     */
    "TaskName"?: string;
    /**
     * 拨测任务类型。取值：
     * - **Internet**：公网拨测。
     * - **Intranet**：私网拨测。
     * @example `Internet`
     */
    "Type": string;
    /**
     * 拨测任务协议，取值：
     * - **ICMP**。
     * - **TCP**。
     * - **HTTP**。
     * > 私网拨测仅支持ICMP和TCP协议。
     * @example `ICMP`
     */
    "Protocol": string;
    /**
     * 拨测任务目的域名。
     * 对于ICMP、TCP协议类型的拨测，取值为目的服务的IP或域名；对于HTTP协议类型的拨测，取值为目的服务的URL。
     * @example `www.example.com`
     */
    "Domain": string;
    /**
     * 拨测协议端口号。
     * > 对于TCP协议类型的拨测必填，其他协议不填值。
     * @example `80`
     */
    "Port": number;
    /**
     * 拨测协议每分钟发包数。
     * 取值范围：**1**~**60**。
     * > 对于ICMP协议类型的拨测必填，其他协议不填值。
     * @example `10`
     */
    "PacketNumber": number;
    /**
     * 私网拨测源地址。
     * > 对于私网类型的拨测协议必填。
     * @example `192.168.1.1`
     */
    "ProbeTaskSourceAddress"?: string;
    /**
     * 是否启用拨测任务。取值：
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    "Enable": boolean;
}
