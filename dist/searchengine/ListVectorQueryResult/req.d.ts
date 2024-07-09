export interface ListVectorQueryResultRequest {
    /**
     * 实例ID
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 地址。
     * @example `47.100.XX.XX`
     */
    "address"?: string;
    /**
     * 查询类型：vector、primary_key、vector_text
     * @example `primary_key`
     */
    "queryType"?: string;
    /**
     * 向量查询类型：vector、image、text
     * @example `image`
     */
    "vectorQueryType"?: string;
    /**
     * body参数。
     * @example `{"tableName":"api","ids":["1"]}`
     */
    "body"?: any;
}
