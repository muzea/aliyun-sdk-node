export interface DissociateTransitRouterAttachmentFromRouteTableRequest {
    /**
     * 网络实例连接ID。
     * @example `tr-attach-nls9fzkfat8934****`
     */
    "TransitRouterAttachmentId": string;
    /**
     * 企业版转发路由器路由表ID。
     * @example `vtb-bp1dudbh2d5na6b50****`
     */
    "TransitRouterRouteTableId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `02fb3da4-130e-11e9-8e44-001****`
     */
    "ClientToken"?: string;
    /**
     * 是否对此次请求执行预检，包括权限、实例状态校验等。取值：
     * - **false**（默认）：发送正常请求，通过检查后直接解除关联转发关系。
     * - **true**：发送检查请求，只进行校验，不会解除关联转发关系。检查项包括是否填写了必需参数、请求格式等。如果检查不通过，则返回对应错误。如果检查通过，则返回对应请求ID。
     * @example `false`
     */
    "DryRun"?: boolean;
}
