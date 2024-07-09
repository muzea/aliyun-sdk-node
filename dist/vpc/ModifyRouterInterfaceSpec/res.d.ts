export interface ModifyRouterInterfaceSpecResponse {
    /**
     * 路由器接口的规格。取值：
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
     * @example `Small.1`
     */
    Spec: string;
    /**
     * 请求ID。
     * @example `4EC47282-1B74-4534-BD0E-403F3EE64CAF`
     */
    RequestId: string;
}
