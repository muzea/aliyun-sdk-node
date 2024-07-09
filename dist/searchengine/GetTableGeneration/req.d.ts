export interface GetTableGenerationRequest {
    /**
     * 实例ID
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 索引表名称
     * @example `test_summary`
     */
    "tableName": string;
    /**
     * 索引全量版本
     * @example `1708674867`
     */
    "generationId": number;
}
