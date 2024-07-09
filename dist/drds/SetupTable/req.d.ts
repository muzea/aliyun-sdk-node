export interface SetupTableRequest {
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
     * 表所在的数据库名称。
     * @example `test`
     */
    "DbName": string;
    /**
     * 是否允许全表扫描。
     * @example `true`
     */
    "AllowFullTableScan": boolean;
    /**
     * 关联的表名。
     * @example `test`
     */
    "TableName": string[];
}
