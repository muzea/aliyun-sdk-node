export interface AnalyzeSQLLineageRequest {
    /**
     * 数据库ID。
     * > 该参数对应[SearchDatabase](~~141876~~)、[ListDatabases](~~141873~~)、[GetDatabase](~~141869~~)等接口中的DatabaseId参数，您可以调用上述任一接口获取数据库ID。
     * @example `123***`
     */
    "DbId": number;
    /**
     * SQL语句。
     * @example `insert into a (id) select id from b;`
     */
    "SqlContent": string;
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `3***`
     */
    "Tid"?: number;
}
