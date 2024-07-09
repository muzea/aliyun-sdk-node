export interface CreateEndpointGroupsRequest {
    /**
     * 全球加速实例所属地域ID，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `1F4B6A4A-C89E-489E-BAF1-52777EE148EF`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会创建资源。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `true`
     */
    "DryRun"?: boolean;
    /**
     * 全球加速实例ID。
     * @example `ga-bp1odcab8tmno0hdq****`
     */
    "AcceleratorId": string;
    /**
     * 监听ID。
     * > 当该监听协议为**HTTP**或**HTTPS**时，调用**CreateEndpointGroups**接口每次仅支持创建一个终端节点组。
     * @example `lsr-bp1bpn0kn908w4nbw****`
     */
    "ListenerId": string;
    "EndpointGroupConfigurations": {
        EndpointGroupName: string;
        EndpointGroupDescription: string;
        EndpointGroupRegion: string;
        TrafficPercentage: number;
        HealthCheckEnabled: boolean;
        HealthCheckIntervalSeconds: number;
        HealthCheckPath: string;
        HealthCheckPort: number;
        HealthCheckProtocol: string;
        ThresholdCount: number;
        EndpointConfigurations: {
            Type: string;
            Weight: number;
            Endpoint: string;
            SubAddress: string;
        }[];
        EndpointRequestProtocol: string;
        EndpointGroupType: string;
        PortOverrides: {
            ListenerPort: number;
            EndpointPort: number;
        }[];
        EnableClientIPPreservationToa: boolean;
        EnableClientIPPreservationProxyProtocol: boolean;
        Tag: {
            Key: string;
            Value: string;
        }[];
        SystemTag: {
            Key: string;
            Value: string;
            Scope: string;
        }[];
    }[];
}
