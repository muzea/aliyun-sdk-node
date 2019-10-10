interface CancelAutoSnapshotPolicyRequest {
    "RegionId"?: string;
    /**
    * 自动快照策略和云盘所在的地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "regionId": string;
    /**
    * 目标云盘ID。当您需要取消多块云盘的自动快照策略时，多块云盘ID用一个格式类似 "d-xxxxxxxxx", "d-yyyyyyyyy", … "d-zzzzzzzzz" 的JSON数组表示，云盘ID之间用半角逗号（,）隔开。
    * @example `["d-233e6yl**", "d-23vbpbi**", "d-23vasz3**"]`
    */ "diskIds": string;
    "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
}
export { CancelAutoSnapshotPolicyRequest };