export interface GetSparkStatementRequest {
    /**
     * 此Spark作业中代码块的唯一id
     * @example `1`
     */
    "StatementId": number;
    /**
     * Spark作业的唯一id
     * @example `j202106071620hangzhou00000000001`
     */
    "JobId": string;
}
