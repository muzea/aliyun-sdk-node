export interface CreateSqlStatementResponse {
    /**
     * 返回结果。
     */
    data: {
        /**
         * SQL查询ID。
         * @example `st-1231dfafadfa***`
         */
        statementId: string;
    };
    /**
     * 请求ID。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C8944****`
     */
    requestId: string;
}
