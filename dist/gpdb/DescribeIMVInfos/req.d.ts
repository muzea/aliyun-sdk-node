export interface DescribeIMVInfosRequest {
    /**
     * 实例ID。
     * @example `gp-xxxxxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * 数据库名称。
     * @example `testdb`
     */
    "Database": string;
    /**
     * 物化视图名称。
     * @example `public."mv1"`
     */
    "MVName"?: string;
}
