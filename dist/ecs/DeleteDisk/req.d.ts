interface DeleteDiskRequest {
    "RegionId"?: string;
    /**
    * 需要释放的云盘设备 ID。
    * @example `d-23jbf2***`
    */ "DiskId": string;
    "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
}
export { DeleteDiskRequest };