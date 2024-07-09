export interface DeleteDatabaseRequest {
    /**
     * 集群ID。
     * @example `pc-*************`
     */
    "DBClusterId": string;
    /**
     * 数据库名称。
     * @example `testdb`
     */
    "DBName": string;
}
