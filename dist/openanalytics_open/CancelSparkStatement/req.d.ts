export interface CancelSparkStatementRequest {
    /**
     * Spark作业中代码块的唯一ID。
     * @example `2026****`
     */
    "StatementId": string;
    /**
     * Spark作业的唯一ID。
     * @example `j202106071620hangzhou****`
     */
    "JobId": string;
}
