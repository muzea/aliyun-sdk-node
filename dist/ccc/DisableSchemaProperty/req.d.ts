export interface DisableSchemaPropertyRequest {
    /**
     * schema id
     * @example `profile`
     */
    "SchemaId": string;
    /**
     * 字段名
     * @example `name`
     */
    "PropertyName": string;
    /**
     * 请求ID
     * @example `2263B273-AC1B-44EB-BA98-87F2322C6780`
     */
    "RequestId"?: string;
    /**
     * 实例ID。
     * @example `ef1e71e9-ae9d-487c-96ad-9181d85cf802`
     */
    "InstanceId": string;
}
