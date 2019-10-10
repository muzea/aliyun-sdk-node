interface DeleteAutoSnapshotPolicyRequest {
    "RegionId"?: string;
    /**
    * 自动快照所属的地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "regionId": string;
    /**
    * 自动快照策略的 ID。您可以调用 [DescribeAutoSnapshotPolicyEx](~~25530~~) 查看您可用的自动快照策略。
    * @example `p-233e6ylv0`
    */ "autoSnapshotPolicyId": string;
    "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
}
export { DeleteAutoSnapshotPolicyRequest };