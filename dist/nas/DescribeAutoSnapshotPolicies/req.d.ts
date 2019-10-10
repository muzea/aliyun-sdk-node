interface DescribeAutoSnapshotPoliciesRequest {
    "RegionId": string;
    /**
    * 文件系统类型，可选值：extreme。
    * @example `extreme`
    */ "FileSystemType": string;
    /**
    * 自动快照策略 ID。
    * @example `sp-extreme-233e6ylv0`
    */ "AutoSnapshotPolicyId"?: string;
    /**
    *
    * 分页展示返回的自动快照策略时的每页行数。 最大值：100，默认值：10。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 自动快照策略返回结果分多页展示。 起始值：1，默认值：1。
    * @example `1`
    */ "PageNumber"?: number;
}
export { DescribeAutoSnapshotPoliciesRequest };