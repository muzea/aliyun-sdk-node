export interface CheckDrdsDbNameRequest {
    /**
     * DRDS 实例 ID
     * @example `drds********`
     */
    "DrdsInstanceId": string;
    /**
     * DRDS 数据库名
     * @example `drds_test`
     */
    "DbName": string;
}
