export interface SaveDocumentRequest {
    /**
     * schema id
     * @example `profile`
     */
    "SchemaId": string;
    /**
     * 文档ID
     * @example `xxx`
     */
    "DocumentId"?: string;
    /**
     * 要保存的文档内容，需要符合Schema定义的规则
     * @example `{"name":"tom"}`
     */
    "DocumentJson": string;
    /**
     * 请求ID
     * @example `EAF3C248-E123-441B-A545-B6CD02E98EED`
     */
    "RequestId"?: string;
    /**
     * 实例ID。
     * @example `9cfad875-6260-4a53-ab6e-b13e3fb31f7d`
     */
    "InstanceId": string;
}
