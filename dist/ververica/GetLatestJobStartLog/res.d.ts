export interface GetLatestJobStartLogResponse {
    /**
     * 请求ID。
     * @example `CBC799F0-AS7S-1D30-8A4F-882ED4DD****`
     */
    requestId: string;
    /**
     * 表示业务请求是否成功。
     * @example `true`
     */
    success: boolean;
    /**
     * 业务状态码，统一为200。
     * @example `200`
     */
    httpCode: number;
    /**
     * 当success为false时，该值不为空，表示业务错误码；当success为true时，该值为空。
     * @example `""`
     */
    errorCode: string;
    /**
     * 当success为false时，该值不为空，表示业务错误信息；当success为true时，该值为空。
     * @example `""`
     */
    errorMessage: string;
    /**
     * 当success为false时，该值不为空，表示最新作业运行日志；当success为true时，该值为空。
     * @example `"[main] INFO  org.apache.flink.runtime.entrypoint.ClusterEntrypoint        [] - --------------------------------------------------------------------------------\n2024-05-22 11:46:39,871 [main] INFO  org.apache.flink.runtime.entrypoint.ClusterEntrypoint"`
     */
    data: string;
}
