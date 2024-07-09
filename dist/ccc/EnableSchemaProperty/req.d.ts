export interface EnableSchemaPropertyRequest {
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
     * @example `03C67DAD-EB26-41D8-949D-9B0C470FB716`
     */
    "RequestId"?: string;
    /**
     * 实例ID。
     * @example `9cfad875-6260-4a53-ab6e-b13e3fb31f7d`
     */
    "InstanceId": string;
}
