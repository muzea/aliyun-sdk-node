export interface ListDataCorrectPreCheckSQLResponse {
    /**
     * 请求ID。
     * @example `31853A2B-DC9D-5B39-8492-D2AC8BCF550E`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 预检查环节的SQL信息列表。
     */
    PreCheckSQLList: {
        /**
         * SQL语句。
         * @example `OPTIMIZE TABLE `Text_TableNames``
         */
        CheckSQL: string;
        /**
         * 预估影响行数。
         * @example `0`
         */
        AffectRows: number;
        /**
         * 数据库ID。
         * @example `1930****`
         */
        DbId: number;
        /**
         * SQL审核优化建议详情信息的查询KEY。根据此Key调用[GetSQLReviewOptimizeDetail](~~265977~~)获取SQL审核优化建议的详情。
         * @example `b9e771fc6ec247dea6d06a32c777****`
         */
        SQLReviewQueryKey: string;
        /**
         * SQL审核状态，返回值如下：
         * - **WAITING**：等待审核。
         * - **RUNNING**：正在审核。
         * - **IGNORE**：忽略审核。
         * - **PASS**：审核通过。
         * - **BLOCK**：审核不通过。
         * @example `WAITING`
         */
        SqlReviewStatus: string;
        /**
         * SQL类型，例如，DELETE、UPDATE、ALTER_TABLE等。
         * @example `OPTIMIZE`
         */
        SqlType: string;
        /**
         * 数据变更的表名。
         * @example `Text_TableNames`
         */
        TableNames: string;
    }[];
}
