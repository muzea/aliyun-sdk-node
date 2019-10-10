interface ModifyAutoSnapshotPolicyRequest {
    "RegionId": string;
    /**
    * 目标自动快照策略 ID。您可以调用 DescribeAutoSnapshotPolicies 查看您可用的自动快照策略。
    * @example `sp-extreme-233e6ylv0`
    */ "AutoSnapshotPolicyId": string;
    /**
    * 自动快照策略的名称。如果参数为空则代表不修改。
    * @example `FinanceJoshua`
    */ "AutoSnapshotPolicyName"?: string;
    /**
    * 自动快照的重复日期，单位为天，周期为星期。取值范围：1~7，如1表示周一。当一星期内需要创建多次自动快照时，可以传入多个时间点：
    * - 最多传入 7 个时间点。
    * - 多个时间点用半角逗号（,）隔开。
    * @example `1,7`
    */ "RepeatWeekdays"?: string;
    /**
    * 自动快照的保留时间，单位为天。取值范围：
    * - -1（默认）：永久保存。
    * - 1~65536：指定保存天数。
    * @example `30`
    */ "RetentionDays"?: number;
    /**
    * 自动快照的创建时间点，单位为小时。取值范围：0~23，代表 00:00 至 23:00 共 24 个时间点，如 1 表示 01:00。当一天内需要创建多次自动快照时，可以传入多个时间点：
    * - 最多传入 24 个时间点。
    * - 多个时间点半角逗号（,）隔开。
    * @example `0,1`
    */ "TimePoints"?: string;
}
export { ModifyAutoSnapshotPolicyRequest };