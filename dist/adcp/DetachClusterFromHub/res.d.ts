export interface DetachClusterFromHubResponse {
    /**
     * 请求ID。
     * @example `4412F213-DBCD-5D1B-A9A1-F6C26C6C19D9`
     */
    RequestId: string;
    /**
     * 主控集群ID。
     * @example `cc490b1e67ccc43a784727f29f33e****`
     */
    ClusterId: string;
    /**
     * 子集群列表。
     */
    ManagedClusterIds: string[];
    /**
     * 任务ID。
     * @example `T-623a96b7bbeaac074b00****`
     */
    TaskId: string;
}
