export interface DeleteDocumentsRequest {
    /**
     * schema id
     * @example `profile`
     */
    "SchemaId": string;
    /**
     * 文档id列表
     */
    "DocumentIds"?: string[];
    /**
     * 请求ID。
     * @example `0630E5DF-CEB0-445B-8626-D5C7481181C3`
     */
    "RequestId"?: string;
    /**
     * 实例ID
     * @example `9cfad875-6260-4a53-ab6e-b13e3fb31f7d`
     */
    "InstanceId": string;
}
