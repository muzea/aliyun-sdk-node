export interface DescribeShardTaskInfoRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 实例ID。
     * @example `drds*********`
     */
    "DrdsInstanceId": string;
    /**
     * 数据库名。
     * @example `jjjjjj_ppppp`
     */
    "DbName": string;
    /**
     * 源表名称。
     * @example `a1`
     */
    "SourceTableName": string;
    /**
     * 目标表名称。
     * @example `a2`
     */
    "TargetTableName": string;
}
