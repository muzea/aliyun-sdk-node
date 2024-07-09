export interface QueryDedicatedBlockStorageClusterDiskThroughputStatusResponse {
    /**
     * 设置专属块存储集群云盘吞吐状态。可能值：
     * - WAIT：待执行。
     * - RUNNING：正常运行。
     * - SUCCESS：成功。
     * - FAIL：失败
     * @example `Running`
     */
    Status: string;
    /**
     * 请求ID。无论调用接口成功与否，我们都会返回请求 ID。
     * @example `A37597A6-BB99-19B3-85EA-4C2B91F0****`
     */
    RequestId: string;
}
