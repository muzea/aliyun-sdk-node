export interface DescribeDBLinksResponse {
    /**
     * 请求ID。
     * @example `45D24263-7E3A-4140-9472-************`
     */
    RequestId: string;
    /**
     * DBLink信息集。
     */
    DBLinkInfos: {
        /**
         * DBLink的源集群ID。
         * @example `pc-a*************`
         */
        DBInstanceName: string;
        /**
         * DBLink名称。
         * @example `dblink_test`
         */
        DBLinkName: string;
        /**
         * DBLink的源数据库名称。
         * @example `testdb1`
         */
        SourceDBName: string;
        /**
         * DBLink的目标数据库名称。
         * @example `testdb2`
         */
        TargetDBName: string;
        /**
         * DBLink的目标集群ID。
         * > 如果目标不是PolarDB PostgreSQL版（兼容Oracle）集群，则该参数为空。
         * @example `pc-b************`
         */
        TargetDBInstanceName: string;
        /**
         * DBLink的目标数据库账号。
         * @example `testacc`
         */
        TargetAccount: string;
    }[];
    /**
     * 集群ID。
     * @example `pc-a*************`
     */
    DBInstanceName: string;
}
