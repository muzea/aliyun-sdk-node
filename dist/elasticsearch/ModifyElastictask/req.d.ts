export interface ModifyElastictaskRequest {
    /**
     * 实例ID。
     * @example `es-cn-6ja1ro4jt000c****`
     */
    "InstanceId": string;
    /**
     * 指定扩缩容信息。
     * @example `{     "elasticExpansionTask":     {         "triggerType":"crontab",         "cronExpression":"0 0 0 ? * MON",         "elasticNodeCount":"2",         "targetIndices":["*"],         "replicaCount":"2"     } }`
     */
    "body"?: string;
}
