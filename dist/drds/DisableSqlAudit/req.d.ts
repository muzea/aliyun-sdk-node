export interface DisableSqlAuditRequest {
    /**
     * DRDS实例ID。
     * @example `drds***********`
     */
    "DrdsInstanceId": string;
    /**
     * DRDS的数据库名称。
     * @example `drds_test`
     */
    "DbName": string;
}
