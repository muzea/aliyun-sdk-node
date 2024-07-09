export interface FlashbackRecycleBinTableRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 表所在的实例ID。
     * @example `drds************`
     */
    "DrdsInstanceId": string;
    /**
     * 表所在的数据库名称。
     * @example `test`
     */
    "DbName": string;
    /**
     * 需要恢复的逻辑表名称。
     * @example `test`
     */
    "TableName": string;
}
