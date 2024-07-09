export interface DescribeOasSQLDetailsResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-****-****-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * SQL 执行计划信息列表。
     */
    Data: {
        /**
         * 由于脱敏，内容与参数 statement 一致。
         * @example `select * from test where id = ?`
         */
        Fulltext: string;
        /**
         * SQL 涉及的表名。
         */
        Tables: string[];
        /**
         * 用户名称。
         * @example `test_user`
         */
        UserName: string;
        /**
         * 参数化后的文本。
         * @example `select * from test where id = ?`
         */
        Statement: string;
        /**
         * 数据库名称。
         * @example `test_db`
         */
        DbName: string;
    };
}
