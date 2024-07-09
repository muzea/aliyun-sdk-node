export interface DeleteTransitRouterPeerAttachmentRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `02fb3da4-130e-11e9-8e44-001****`
     */
    "ClientToken"?: string;
    /**
     * 跨地域连接ID。
     * @example `tr-attach-gyjhtx9sjsxhm6****`
     */
    "TransitRouterAttachmentId": string;
    /**
     * 是否对此次删除请求执行预检，包括权限、实例状态校验等。取值：
     * - **false**（默认值）：发送正常请求，通过检查后直接删除跨地域连接。
     * - **true**：发送检查请求，只进行校验，不会删除跨地域连接。检查项包括是否填写了必需参数、请求格式等。如果检查不通过，则返回对应错误。如果检查通过，则返回对应请求ID。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 是否强制删除跨地域连接，取值：
     * - **false**（默认值）：删除跨地域连接前校验是否存在相关资源依赖，如关联转发、路由学习等。如果存在相关依赖，则不允许删除，返回对应错误。
     * - **true**：删除跨地域连接时，默认删除所有相关依赖。
     * @example `false`
     */
    "Force"?: boolean;
}
