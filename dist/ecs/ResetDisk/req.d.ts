interface ResetDiskRequest {
    "RegionId"?: string;
    /**
    * 指定的磁盘设备 ID。
    * @example `d-diskid1`
    */ "DiskId": string;
    /**
    * 需要恢复到某一磁盘阶段的历史快照 ID。
    * @example `s-snapshotid1`
    */ "SnapshotId": string;
    "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
}
export { ResetDiskRequest };