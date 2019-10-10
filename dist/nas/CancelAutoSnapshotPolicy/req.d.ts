interface CancelAutoSnapshotPolicyRequest {
    "RegionId": string;
    /**
    * 目标文件系统 ID。一次最多指定 100 个文件系统 ID，当您需要取消多个文件系统的自动快照策略时，多个文件系统 ID 之间用半角逗号（,）隔开。
    * @example `extreme-233e6ylv0,extreme-23vbpbi03,extreme-23vasz3ds`
    */ "FileSystemIds": string;
}
export { CancelAutoSnapshotPolicyRequest };