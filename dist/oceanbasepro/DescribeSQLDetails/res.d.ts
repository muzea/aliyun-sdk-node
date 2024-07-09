export interface DescribeSQLDetailsResponse {
    /**
     * 请求 ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * SQL 列表详情。
     */
    SQLDetails: {
        /**
         * SQL 文本。
         * @example `SELECT  ****   FROM ****   WHERE **** = ? AND **** = ?   ORDER BY **** ASC`
         */
        SQLText: string;
        /**
         * 数据库名。
         * @example `testdb`
         */
        DbName: string;
        /**
         * 用户名。
         * @example `tester`
         */
        UserName: string;
    }[];
}
