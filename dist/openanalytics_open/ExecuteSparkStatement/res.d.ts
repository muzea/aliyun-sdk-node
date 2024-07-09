export interface ExecuteSparkStatementResponse {
    /**
     * 代码块提交成功后在此Spark作业中的唯一ID。
     * @example `2`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `0DC5B6F080E8-0DC5B6F080E8-0DC5B`
     */
    RequestId: string;
}
