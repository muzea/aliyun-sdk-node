export interface DeleteSchemaPropertyRequest {
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
     * @example `7BEEA660-A45A-45E3-98CC-AFC65E715C23`
     */
    "RequestId"?: string;
    /**
     * 实例ID。
     * @example `9cfad875-6260-4a53-ab6e-b13e3fb31f7d`
     */
    "InstanceId": string;
}
