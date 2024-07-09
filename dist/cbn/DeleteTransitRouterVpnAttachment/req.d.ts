export interface DeleteTransitRouterVpnAttachmentRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会删除VPN连接。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后直接删除VPN连接。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * VPN连接ID。
     * @example `tr-attach-b9xj1dv69600kj****`
     */
    "TransitRouterAttachmentId": string;
    /**
     * 是否强制删除VPN连接，取值：
     * - **false**（默认值）：删除VPN连接前校验是否存在相关资源依赖，如关联转发、路由学习等。如果存在相关依赖，则不允许删除，返回对应错误。
     * - **true**：删除VPN连接时，默认删除所有相关依赖。
     * @example `false`
     */
    "Force"?: boolean;
}
