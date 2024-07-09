export interface DescribeRecommendIndexResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 推荐索引信息。
     */
    RecommendIndex: {
        /**
         * 返回根据诊断系统计算后为 SQL 语句推荐的索引。
         * - 如推荐的索引为主键，则返回 PRIMARY；
         * - 如推荐用户创建的索引，则返回索引名。
         * 当前系统仅为 SQL 推荐一个索引，可通过 DescribeIndexes API 查看一个表的索引数据。
         * @example `PRIMARY`
         */
        SuggestIndex: string;
        /**
         * 返回租户模式。  当前支持：
         * - Oracle：Oracle 模式。
         * - MySQL: MySQL 模式。
         * @example `mysql`
         */
        TenantMode: string;
        /**
         * 表信息。
         * 返回 SQLID 对应 SQL 语句涉及到的数据表，如单表查询，则返回访问的单张数据表，如关联查询，则返回 SQL 语句访问的所有数据表，以竖线分隔，如 "Table1|Table2"。
         * @example `testtable`
         */
        TableList: string;
    };
}
