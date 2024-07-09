export interface CancelAutoSnapshotPolicyRequest {
    /**
     * 目标文件系统ID。
     * 一次调用最多指定100个文件系统，当您需要取消多个文件系统的自动快照策略时，多个文件系统ID之间用半角逗号（,）隔开。
     * @example `extreme-233e6****,extreme-23vbp****,extreme-23vas****`
     */
    "FileSystemIds": string;
}
