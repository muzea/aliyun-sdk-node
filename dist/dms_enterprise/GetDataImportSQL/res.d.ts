export interface GetDataImportSQLResponse {
    /**
     * 请求ID。可用于定位日志，排查问题。
     * @example `B43AD641-49C2-5299-9E06-1B37EC1B****`
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
     * 调用失败时，返回的错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * SQL详情。
     */
    SQLDetail: {
        /**
         * SQL脚本。
         * @example `insert into t1 values (1);`
         */
        ExecSql: string;
    };
}
