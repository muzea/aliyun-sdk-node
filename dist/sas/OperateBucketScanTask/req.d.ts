export interface OperateBucketScanTaskRequest {
    /**
     * Bucket名称。
     * @example `iboxpublic****`
     */
    "BucketName"?: string;
    /**
     * 对Bucket的操作。取值：
     * - **1**：取消检测。
     * @example `1`
     */
    "OperateCode"?: number;
}
