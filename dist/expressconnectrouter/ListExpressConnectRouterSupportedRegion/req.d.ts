export interface ListExpressConnectRouterSupportedRegionRequest {
    /**
     * 网络实例的类型。取值：
     * - **TR**：转发路由器实例。
     * - **VBR**：边界路由器实例。
     * - **VPC**：虚拟专有网络实例。
     * @example `VBR`
     */
    "NodeType": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `02fb3da4-130e-11e9-8e44-00****`
     */
    "ClientToken"?: string;
}
