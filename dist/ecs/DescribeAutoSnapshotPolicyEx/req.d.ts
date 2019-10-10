interface DescribeAutoSnapshotPolicyExRequest {
    /**
    * 要查询的自动快照策略所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    "SourceRegionId"?: string;
    /**
    * 自动快照策略ID。
    * @example `p-233e6yl**`
    */ "AutoSnapshotPolicyId"?: string;
    /**
    * 自动快照策略返回结果分多页展示。起始值：1
    * 默认值：1
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页展示返回的自动快照策略时的每页行数。最大值：50
    * 默认值：10
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeAutoSnapshotPolicyExRequest };