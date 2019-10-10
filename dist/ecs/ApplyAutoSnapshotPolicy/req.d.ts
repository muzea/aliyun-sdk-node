interface ApplyAutoSnapshotPolicyRequest {
    "RegionId"?: string;
    /**
    * 自动快照策略和云盘所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "regionId": string;
    /**
    * 目标自动快照策略ID。
    * @example `p-233e6ylv0`
    */ "autoSnapshotPolicyId": string;
    /**
    * 目标云盘ID。当您需要将自动快照策略应用于多块云盘时，云盘ID之间用半角逗号（,）隔开。
    * @example `["d-233e6ylv0", "d-23vbpbi03", "d-23vasz3ds"]`
    */ "diskIds": string;
    "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
}
export { ApplyAutoSnapshotPolicyRequest };