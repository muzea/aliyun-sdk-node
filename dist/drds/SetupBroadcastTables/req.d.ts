export interface SetupBroadcastTablesRequest {
    /**
     * 实例所在地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * DRDS实例ID。
     * @example `drds************`
     */
    "DrdsInstanceId": string;
    /**
     * DRDS数据库名称。
     * @example `test`
     */
    "DbName": string;
    /**
     * 激活广播表开关。
     * @example `true`
     */
    "Active": boolean;
    /**
     * DRDS表格名称。
     * @example `test`
     */
    "TableName": string[];
}
