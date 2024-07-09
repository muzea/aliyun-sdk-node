export interface DeleteExpressConnectRouterAssociationRequest {
    /**
     * 专线网关实例ID。
     * @example `ecr-mezk2idmsd0vx2****`
     */
    "EcrId": string;
    /**
     * 专线网关与VPC或TR的关联ID。
     * @example `ecr-assoc-9p2qxx5phpca2m****`
     */
    "AssociationId": string;
    /**
     * 专线网关是否是删除与TR或VPC的关联关系。取值：
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    "DeleteAttachment"?: boolean;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会修改服务资源。
     * - **false**（默认值）：发送正常请求。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `02fb3da4-130e-11e9-8e44-00****`
     */
    "ClientToken"?: string;
}
