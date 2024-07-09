export interface UntagResourcesRequest {
    /**
     * 专线网关实例的ID列表。
     */
    "ResourceId": string[];
    /**
     * 要解绑的专线网关实例的标签键。
     */
    "TagKey"?: string[];
    /**
     * 是否解绑所有标签，只针对**TagKey**为空时有效。取值：
     * - **true**：解绑专线网关实例的所有标签。
     * - **false**（默认值）：不解绑专线网关实例的所有标签。
     * > 您必须输入参数 **TagKey** 和参数 **All** 中的任意一个。
     * @example `false`
     */
    "All"?: boolean;
    /**
     * 资源类型。支持的类型为 **EXPRESSCONNECTROUTER**，即专线网关实例。
     * @example `EXPRESSCONNECTROUTER`
     */
    "ResourceType": string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会修改服务资源。
     * - **false**（默认值）：发送正常请求。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 客户端 Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken 只支持 ASCII 字符。
     * > 若您未指定，则系统自动使用 API 请求的 **RequestId** 作为 **ClientToken** 标识。每次 API 请求的 **RequestId** 不一样。
     * @example `
    02fb3da4-130e-11e9-8e44-00****`
     */
    "ClientToken"?: string;
}
