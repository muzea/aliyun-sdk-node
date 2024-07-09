export interface DescribeLensServiceStatusResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
    /**
     * 块存储数据洞察（CloudLens for EBS）的状态。可能值：
     * - Applying：申请中。
     * - UnAvailable：不可用。
     * - Available：可用。
     * @example `Available`
     */
    Status: string;
}
