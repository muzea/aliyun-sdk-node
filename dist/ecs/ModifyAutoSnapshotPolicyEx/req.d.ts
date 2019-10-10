interface ModifyAutoSnapshotPolicyExRequest {
    "RegionId"?: string;
    /**
    * 自动快照策略所在的地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "regionId": string;
    /**
    * 目标自动快照策略 ID。您可以调用 [DescribeAutoSnapshotPolicyEx](~~25530~~) 查看您可用的自动快照策略。
    * @example `p-autopolicyid1`
    */ "autoSnapshotPolicyId": string;
    "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 自动快照策略的名称。如果参数为空则代表不修改。
    * @example `FinanceJoshua`
    */ "autoSnapshotPolicyName"?: string;
    /**
    * 自动快照的创建时间点，单位为小时。取值范围：0~23，代表 00:00 至 23:00 共 24 个时间点，如 1 表示 01:00。当一天内需要创建多次自动快照时，可以传入多个时间点：
    * - 最多传入 24 个时间点。
    * - 多个时间点用一个格式类似 "0", "1", … "23" 的 JSON 数组表示，时间点之间用半角逗号（,）隔开。
    * @example `["0", "1"]`
    */ "timePoints"?: string;
    /**
    * 自动快照的重复日期，单位为天，周期为星期。取值范围：1~7，如 1 表示周一。当一星期内需要创建多次自动快照时，可以传入多个时间点：
    * - 最多传入 7 个时间点。
    * - 多个时间点用一个格式类似 "1", "2", … "7" 的 JSON 数组表示，时间点之间用半角逗号（,）隔开。
    * @example `["1", "7"]`
    */ "repeatWeekdays"?: string;
    /**
    * 自动快照的保留时间，单位为天。取值范围：
    * - -1（默认）：永久保存。
    * - 1~65536：指定保存天数。
    * @example `30`
    */ "retentionDays"?: number;
}
export { ModifyAutoSnapshotPolicyExRequest };