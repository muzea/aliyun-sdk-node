export interface AttachExpressConnectRouterChildInstanceRequest {
    /**
     * 专线网关实例ID。
     * @example `ecr-a5xqrgbeidz1w8****`
     */
    "EcrId": string;
    /**
     * VBR实例的ID。
     * @example `vbr-j6cwxhgg0s5nuephp****`
     */
    "ChildInstanceId": string;
    /**
     * 网络实例的类型，取值：**VBR**边界路由器。
     * @example `VBR`
     */
    "ChildInstanceType": string;
    /**
     * VBR实例所在的地域。
     * @example `cn-hangzhou`
     */
    "ChildInstanceRegionId": string;
    /**
     * VBR实例所属的阿里云账号ID（主账号）。
     * >如果您要加载跨账号的网络实例，本参数必填。
     * @example `190550144868****`
     */
    "ChildInstanceOwnerId"?: number;
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
     * @example `02fb3da4-130e-11e9-8e44-00****`
     */
    "ClientToken"?: string;
}
