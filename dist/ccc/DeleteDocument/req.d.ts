export interface DeleteDocumentRequest {
    /**
     * schema id
     * @example `profile`
     */
    "SchemaId": string;
    /**
     * 文档ID
     * @example `xxx`
     */
    "DocumentId": string;
    /**
     * 请求ID。
     * @example `DE803553-8AA9-4B9D-9E4E-A82BC69EDCEE	`
     */
    "RequestId"?: string;
    /**
     * 实例ID
     * @example `d278629c-c687-4aa3-b044-4fe9b012****`
     */
    "InstanceId": string;
}
