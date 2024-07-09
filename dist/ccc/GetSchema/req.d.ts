export interface GetSchemaRequest {
    /**
     * schema id
     * @example `profile`
     */
    "SchemaId": string;
    /**
     * 请求ID。
     * @example `03C67DAD-EB26-41D8-949D-9B0C470FB716`
     */
    "RequestId"?: string;
    /**
     * 实例ID
     * @example `b0eb2742-f37e-4c67-82d4-25c651c1xxxx`
     */
    "InstanceId": string;
}
