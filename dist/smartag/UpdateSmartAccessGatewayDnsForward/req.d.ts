export interface UpdateSmartAccessGatewayDnsForwardRequest {
    /**
     * 网关实例id
     * @example `sag-v9un1ccz22owd76lf8`
     */
    "SagInsId": string;
    /**
     * 设备SN
     * @example `sagf4dkqh78`
     */
    "SagSn": string;
    /**
     * 实例ID
     * @example `sagv3dnsforward-nc7qabskj17werc7su`
     */
    "InstanceId": string;
    /**
     * 主DNS
     * @example `114.114.114.114`
     */
    "MasterIp": string;
    /**
     * 备DNS
     * @example `172.16.0.14`
     */
    "SlaveIp"?: string;
    /**
     * 转发模式
     * >- 无效字段，不用关注。
     * @example `first`
     */
    "Mode"?: string;
    /**
     * 出接口类型
     * >- Tunnel代表隧道口，PhysicalPort代表物理口。
     * @example `PhysicalPort`
     */
    "OutboundPortType"?: string;
    /**
     * 出接口序号
     * >- OutboundPortType为PhysicalPort时选填，OutboundPortType为Tunnel时不用填写；
     * >- OutboundPortIndex和OutboundPortName一一对应：0 - eth0；2 - lte。
     * @example `0`
     */
    "OutboundPortIndex"?: number;
    /**
     * 出接口
     * >- OutboundPortType为PhysicalPort时选填，OutboundPortType为Tunnel时不用填写；
     * >- OutboundPortIndex和OutboundPortName一一对应：0 - eth0；2 - lte。
     * @example `eth0`
     */
    "OutboundPortName"?: string;
    /**
     * 智能接入网关的地域ID
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 域名
     * >
     * >- 支持泛域名，支持全量匹配（域名填写“*”）。例如:
     * *.baidu.com 允许输入的格式为 baidu.com
     * @example `www.aliyun.com`
     */
    "Domain": string;
}
