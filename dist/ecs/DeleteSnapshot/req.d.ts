interface DeleteSnapshotRequest {
    "RegionId"?: string;
    /**
    * 快照 ID。
    * @example `s-snapshotid1`
    */ "SnapshotId": string;
    "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 是否强制删除有磁盘关联的快照。
    * > 删除后该磁盘无法重新初始化。
    * @example `false`
    */ "Force"?: boolean;
}
export { DeleteSnapshotRequest };