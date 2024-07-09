export interface DeleteVcoRouteEntryRequest {
    /**
     * IPsec连接所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * IPsec连接ID。
     * @example `vco-p0w5112fgnl2ihlmf****`
     */
    "VpnConnectionId": string;
    /**
     * 待删除的目的路由条目的目标网段。
     * @example `192.168.10.0/24`
     */
    "RouteDest": string;
    /**
     * 待删除的目的路由条目的权重值。取值：
     * - **0**：表示低优先级。
     * - **100**：表示高优先级。
     * @example `100`
     */
    "Weight": number;
    /**
     * 待删除的目的路由条目的下一跳。
     * @example `vco-p0w5112fgnl2ihlmf****`
     */
    "NextHop": string;
    /**
     * 隧道协议。仅取值：**Ipsec**（默认值），表示IPsec隧道协议。
     * @example `Ipsec`
     */
    "OverlayMode"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-4266****`
     */
    "ClientToken"?: string;
}
