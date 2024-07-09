export interface CreateSnapshotResponse {
    /**
     * 返回结果：
     * - true：手动快照备份成功
     * - false：手动快照备份失败
     * @example `true`
     */
    Result: boolean;
    /**
     * 请求ID。
     * @example `5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D***`
     */
    RequestId: string;
}
