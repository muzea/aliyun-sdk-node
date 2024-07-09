export interface CreateExpressConnectRouterRequest {
    /**
     * 专线网关实例的名称。
     * @example `test`
     */
    "Name"?: string;
    /**
     * 专线网关实例的描述。
     * @example `test`
     */
    "Description"?: string;
    /**
     * 专线网关实例所属的资源组ID。
     * @example `rg-acfmvvajg5q****`
     */
    "ResourceGroupId"?: string;
    /**
     * 专线网关实例的ASN。可取值为45104（默认值），64512~65534和4200000000~4294967294，其中65025为阿里云保留值。
     * @example `45104`
     */
    "AlibabaSideAsn": number;
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
     * @example `02fb3da4-130e-11e9-8e44-00****	`
     */
    "ClientToken"?: string;
    "Tags"?: {
        Key: string;
        Value: string;
    }[];
}
