export interface GetSqlStatementResponse {
    /**
     * 返回数据。
     */
    data: {
        /**
         * 查询ID。
         * @example `st-1231311abadfaa`
         */
        statementId: string;
        /**
         * 查询状态。
         * @example `running`
         */
        state: string;
        /**
         * SQL查询结果列表
         */
        sqlOutputs: {
            /**
             * 查询数据，格式为经过JSON序列化的字符串。
             * @example `[{\"values\":[\"test_db\",\"test_table\",false]}`
             */
            rows: string;
            /**
             * Schema的详细信息，格式为经过JSON序列化的字符串。
             * @example `{\"type\":\"struct\",\"fields\":[{\"name\":\"namespace\",\"type\":\"string\",\"nullable\":false,\"metadata\":{}},{\"name\":\"tableName\",\"type\":\"string\",\"nullable\":false,\"metadata\":{}},{\"name\":\"isTemporary\",\"type\":\"boolean\",\"nullable\":false,\"metadata\":{}}]}`
             */
            schema: string;
        }[];
        /**
         * SQL查询错误码。
         * @example `ERROR-102`
         */
        sqlErrorCode: string;
        /**
         * SQL查询错误信息。
         * @example `error message`
         */
        sqlErrorMessage: string;
        /**
         * SQL查询耗时列表。
         */
        executionTime: number[];
    };
    /**
     * 请求ID。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C8944****`
     */
    requestId: string;
}
