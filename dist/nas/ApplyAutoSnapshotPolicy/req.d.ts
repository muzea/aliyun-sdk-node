export interface ApplyAutoSnapshotPolicyRequest {
    /**
     * 目标自动快照策略ID。
     * @example `sp-extreme-233e6****`
     */
    "AutoSnapshotPolicyId": string;
    /**
     * 目标极速型NAS高级型文件系统ID。
     * 一次调用最多指定100个文件系统ID，当您需要将自动快照策略应用于多个文件系统时，文件系统ID之间用半角逗号（,）分隔。
     * @example `extreme-233e6****,extreme -23vbp****,extreme -23vas****`
     */
    "FileSystemIds": string;
}
