export interface ModifyPortRequest {
    /**
     * 转发端口。取值范围：**0**~**65535**。
     * @example `55`
     */
    "FrontendPort": string;
    /**
     * 转发协议类型。取值：
     * - **tcp**：表示TCP协议。
     * - **udp**：表示UDP协议。
     * @example `tcp`
     */
    "FrontendProtocol": string;
    /**
     * 端口转发规则所属的DDoS高防实例的ID。
     * > 您可以调用[DescribeInstanceIds](~~157459~~)查询所有DDoS高防实例的ID。
     * @example `ddoscoo-cn-st21zbyq****`
     */
    "InstanceId": string;
    /**
     * 源站端口。取值范围：**0**~**65535**。
     * @example `55`
     */
    "BackendPort": string;
    /**
     * 源站IP地址列表。
     */
    "RealServers": string[];
}
