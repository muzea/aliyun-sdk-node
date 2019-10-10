interface ApplyAutoSnapshotPolicyRequest {
    "RegionId": string;
    /**
    * 目标文件系统ID。一次最多指定 100 个文件系统 ID，当您需要将自动快照策略应用于多个文件系统时，文件系统 ID 之间用半角逗号（,）隔开。
    * @example `extreme-233e6ylv0,extreme -23vbpbi03,extreme -23vasz3ds`
    */ "FileSystemIds": string;
    /**
    * 目标自动快照策略 ID。
    * @example `sp-extreme-233e6ylv0`
    */ "AutoSnapshotPolicyId": string;
}
export { ApplyAutoSnapshotPolicyRequest };