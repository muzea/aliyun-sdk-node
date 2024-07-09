export interface UpdateTransitRouterEcrAttachmentAttributeRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * ECR连接ID。
     * @example `tr-attach-r6g0m3epjehw57****`
     */
    "TransitRouterAttachmentId": string;
    /**
     * ECR连接的新名称。
     * 名称可以为空或长度为1～128个字符，不能以http://或https://开头。
     * @example `nametest`
     */
    "TransitRouterAttachmentName"?: string;
    /**
     * ECR连接新的描述信息。
     * 描述可以为空或长度为1～256个字符，不能以http://或https://开头。
     * @example `desctest`
     */
    "TransitRouterAttachmentDescription"?: string;
    /**
     * 是否对此次修改请求执行预检，包括权限、实例状态校验等。取值：
     * - **false**（默认）：发送正常请求，通过检查后直接修改转发路由器实例的信息。
     * - **true**：发送检查请求，只进行校验，不会修改转发路由器实例的信息。检查项包括是否填写了必需参数、请求格式等。如果检查不通过，则返回对应错误。如果检查通过，则返回对应请求ID。
     * @example `false`
     */
    "DryRun"?: boolean;
}
