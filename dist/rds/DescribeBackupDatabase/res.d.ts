export interface DescribeBackupDatabaseResponse {
    /**
     * 数据库名，格式为"db1,db2"。
     * @example `db1,db2`
     */
    DatabaseNames: string;
    /**
     * 请求ID。
     * @example `08A3B71B-FE08-4B03-974F-CC7EA6DB1828`
     */
    RequestId: string;
}
