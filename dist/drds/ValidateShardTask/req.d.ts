export interface ValidateShardTaskRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 实例ID。
     * @example `drds23ds****`
     */
    "DrdsInstanceId": string;
    /**
     * 数据库名称。
     * @example `test`
     */
    "DbName": string;
    /**
     * 源表名称。
     * @example `buyer`
     */
    "SourceTableName": string;
    /**
     * 目标表名称。
     * @example `buyer_new`
     */
    "TargetTableName": string;
    /**
     * 任务类型。 取值：
     * * **SINGLE\_TO\_SHARD**：单表转分表
     * * **SHARD\_TO\_SINGLE**： 分表转单表
     * * **SHARD\_TO\_SHARD**：分表转分表
     * @example `SINGLE_TO_SHARD`
     */
    "TaskType": string;
}
