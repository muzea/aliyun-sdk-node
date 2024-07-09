export interface ReplaceTransitRouterRouteTableAssociationRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `123e4567-e89b-12d3-a456-426655****`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会更换网络实例连接关联的转发路由器路由表。检查项包括是否填写了必需参数、请求格式、业务限制等。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后直接更换网络实例连接关联的转发路由器路由表。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 网络实例连接ID。
     * @example `tr-attach-071g5j5tefg4x6****`
     */
    "TransitRouterAttachmentId": string;
    /**
     * 网络实例连接待关联的转发路由器路由表ID。
     * @example `vtb-bp1cprmc6xmzjd66i****`
     */
    "TransitRouterRouteTableId": string;
}
