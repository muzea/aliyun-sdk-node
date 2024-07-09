export interface DescribeExpressConnectRouterAllowedPrefixHistoryRequest {
    /**
     * 专线网关实例ID。
     * @example `ecr-mezk2idmsd0vx2****`
     */
    "EcrId": string;
    /**
     * 专线网关加载的实例ID。
     * > **InstanceId**参数和**AssociationId**参数必须输入一个。
     * @example `vbr-j6cwxhgg0s5nuephp****`
     */
    "InstanceId"?: string;
    /**
     * 网络实例的类型。取值：
     * - **VPC**：虚拟专有网络实例。
     * - **TR**：转发路由器实例。
     * @example `VPC`
     */
    "InstanceType"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会修改服务资源。
     * - **false**（默认值）：发送正常请求。
     * @example `true`
     */
    "DryRun"?: boolean;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `FF9nMec/RZ6H9oqFn1pvyir/SLRlxCCyHJonbGzqL01hiM6Jb3wJowdHvjCfog7ww1b9rSHMRFJnrUBfVba68TJg==`
     */
    "ClientToken"?: string;
    /**
     * 专线网关与专有网络VPC或转发路由器TR的关联的实例ID。
     * > **InstanceId**参数和**AssociationId**参数必须输入一个。
     * @example `ecr-assoc-9p2qxx5phpca2m****
    `
     */
    "AssociationId"?: string;
}
