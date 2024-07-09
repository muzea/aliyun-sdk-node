export interface ModifyRouterInterfaceSpecRequest {
    /**
     *  路由器接口所在的地域。
     *  您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     *  路由器接口的ID。
     * @example `ri-2zeo3xzyf38r4urzd****`
     */
    "RouterInterfaceId": string;
    /**
     * 路由器接口的规格。可用的规格和对应的带宽如下：
     * * **Mini.2**：2Mbps
     * * **Mini.5**：5Mbps
     * * **Small.1**：10Mbps
     * * **Small.2**：20Mbps
     * * **Small.5**：50Mbps
     * * **Middle.1**：100Mbps
     * * **Middle.2**：200Mbps
     * * **Middle.5**：500Mbps
     * * **Large.1**：1000 Mbps
     * * **Large.2**：2000Mbps
     * * **Large.5**：5000 Mbps
     * * **Xlarge.1**：10000Mbps
     * >当**Role**为**AcceptingSide**（连接接收端）时，**Spec**取值为**Negative**。
     * @example `Small.1`
     */
    "Spec": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
     */
    "ClientToken"?: string;
}
