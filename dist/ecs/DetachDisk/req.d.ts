interface DetachDiskRequest {
    "RegionId"?: string;
    /**
    * 待卸载的 ECS 实例 ID。
    * @example `i-instanceid1`
    */ "InstanceId": string;
    /**
    * 待卸载的云盘 ID。
    * @example `d-diskid1`
    */ "DiskId": string;
    "SourceRegionId"?: string;
    /**
    * 资源主账号的 ID，亦即 UID。
    * @example `155780923770`
    */ "OwnerId"?: number;
}
export { DetachDiskRequest };