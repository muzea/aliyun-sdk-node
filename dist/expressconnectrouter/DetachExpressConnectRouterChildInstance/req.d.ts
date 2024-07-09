export interface DetachExpressConnectRouterChildInstanceRequest {
    /**
     * 专线网关实例ID。
     * @example `ecr-mezk2idmsd0vx2****`
     */
    "EcrId": string;
    /**
     * VBR实例ID。
     * @example `vbr-j6cwxhgg0s5nuephp****`
     */
    "ChildInstanceId": string;
    /**
     * 网络实例的类型。取值：**VBR**边界路由器实例。
     * @example `VBR`
     */
    "ChildInstanceType": string;
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
     * @example `02fb3da4-130e-11e9-8e44-00****
    `
     */
    "ClientToken"?: string;
}
