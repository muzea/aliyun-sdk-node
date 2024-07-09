export interface GetJobLogResponse {
    /**
     * 作业的日志内容。
     * @example `INFO SparkContext: Running Spark version 2.x`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `EC031B4B-3E07-40D2-9BC5-xxxx`
     */
    RequestId: string;
}
