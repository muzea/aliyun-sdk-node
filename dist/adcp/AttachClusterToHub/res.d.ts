export interface AttachClusterToHubResponse {
    /**
     * 请求ID
     * @example `EA06613B-37A3-549E-BAE0-E4AD8A6E93D7`
     */
    RequestId: string;
    /**
     * 主控集群ID
     * @example `c8e28143817db4b039b8548d7c899****`
     */
    ClusterId: string;
    /**
     * 子集群ID列表。
     */
    ManagedClusterIds: string[];
    /**
     * 任务ID。
     * @example `T-623a96b7bbeaac074b00****`
     */
    TaskId: string;
}
