export interface TagResourcesRequest {
    /**
     * 专线网关实例 ID 列表。
     */
    "ResourceId": string[];
    /**
     * 要进行绑定的标签列表。
     */
    "Tag": {
        /**
         * 资源的标签键。
         * 一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以`aliyun`或者`acs:`开头，不能包含`http://`或者`https:// `。
         * 一次最多支持输入20个标签的标签键。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 标签值。最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。一旦输入该值，可以为空字符串。
         * 一次调用最多支持添加20个标签值。
         * @example `TestValue`
         */
        Value: string;
    }[];
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
     * @example `02fb3da4-130e-11e9-8e44-00****`
     */
    "ClientToken"?: string;
}
