export interface ConfigEndpointProbeRequest {
    /**
     * 全球加速实例所在的地域ID，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 终端节点组ID。
     * @example `epg-bp1dmlohjjz4kqaun****`
     */
    "EndpointGroupId": string;
    /**
     * 终端节点类型。取值：
     * - **Ip**：云下自定义IP。
     * - **Domain**：云下自定义域名。
     * - **EIP**：云上EIP。
     * - **PublicIp**：云上公网IP。
     * @example `Ip`
     */
    "EndpointType": string;
    /**
     * 终端节点。
     * @example `127.0.XX.XX`
     */
    "Endpoint": string;
    /**
     * 时延探测协议。取值：
     * - **tcp**：TCP协议。
     * - **icmp**：ICMP协议。
     * @example `tcp`
     */
    "ProbeProtocol"?: string;
    /**
     * 时延探测端口。取值范围：**0**～**65535**。
     * @example `80`
     */
    "ProbePort"?: string;
    /**
     * 是否开启时延探测。取值：
     * - **true**：开启。
     * - **false**（默认值）：不开启。
     * @example `true`
     */
    "Enable": string;
}
