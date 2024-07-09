export interface CreateShardTaskRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * DRDS实例ID。
     * @example `drds************`
     */
    "DrdsInstanceId": string;
    /**
     * 数据库名称。
     * @example `test`
     */
    "DbName": string;
    /**
     * 源表表名。
     * @example `test_tb1`
     */
    "SourceTableName": string;
    /**
     * 目标表表名。
     * @example `test_tb2`
     */
    "TargetTableName": string;
    /**
     * 任务类型，取值范围为`SHARD_TO_SINGLE`、`SINGLE_TO_SHARD`、 `SHARD_TO_SHARD`。
     * @example `SINGLE_TO_SHARD`
     */
    "TaskType": string;
}
