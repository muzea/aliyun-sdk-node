export interface ListSQLReviewOriginSQLResponse {
    /**
     * 请求ID，用于定位日志，排查问题。
     * @example `0A00863F-6366-5583-9B96-891DC8D8F88A`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 调用API失败时，返回的错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功。返回值及说明如下：
     * - true：请求成功。
     * - false：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 文件中所包含的SQL条数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 解析的SQL列表。
     */
    OriginSQLList: {
        /**
         * SQL语句ID。
         * @example `1111`
         */
        SQLId: number;
        /**
         * 文件ID。
         * @example `858***`
         */
        FileId: number;
        /**
         * 文件名。
         * @example `test.sql`
         */
        FileName: string;
        /**
         * 文件中的SQL内容。
         * @example `CREATE TABLE `test_sql_review_table` (
          `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
          `gmt_create` datetime NOT NULL,
          `name` varchar(256) DEFAULT NULL
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`
         */
        SQLContent: string;
        /**
         * 检测结果。返回值及说明如下：
         * - **new**：等待分析。
         * - **unknown**：解析异常。
         * - **check_not_pass**：检测不通过。
         * - **check_pass**：检测通过。
         * - **force_pass**：人工通过。
         * - **force_not_pass**：人工不通过。
         * @example `check_pass`
         */
        CheckStatus: string;
        /**
         * 检测结果描述。
         * @example `检测通过`
         */
        StatusDesc: string;
        /**
         * SQL检测时间。
         * @example `2021-06-09 21:07:00`
         */
        CheckedTime: string;
        /**
         * 对SQL内容进行MD5散列算法后得到的值。
         * @example `c7992dc1b681c6733894aded7834f423`
         */
        SqlHash: string;
        /**
         * SQL审核优化建议的统计信息（JSON字符串）。返回值及说明如下：
         * - **MUST_IMPROVE**：必须改进。
         * - **POTENTIAL_ISSUE**：潜在问题。
         * - **SUGGEST_IMPROVE**：建议改进。
         * - **USEDMSTOOLKIT**：使用无锁结构变更。
         * - **USEDMSDML_UNLOCK**：使用无锁数据变更。
         * - **TABLEINDEXSUGGEST**：索引推荐。
         * @example `{\"SUGGEST_IMPROVE\":2,\"POTENTIAL_ISSUE\":1}`
         */
        ReviewSummary: string;
        /**
         * 查询SQL审核优化建议信息的Key。根据此Key调用[GetSQLReviewOptimizeDetail](~~465919~~)接口获取详情。
         * @example `6e9a4bc6867a4174a96b23c8b48b****`
         */
        SQLReviewQueryKey: string;
        /**
         * SQL名称。
         * @example `getByPk`
         */
        SQLName: string;
    }[];
}
