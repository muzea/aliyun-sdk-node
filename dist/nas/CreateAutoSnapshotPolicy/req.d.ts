interface CreateAutoSnapshotPolicyRequest {
    "RegionId": string;
    /**
    * 自动快照的重复日期，单位为天，周期为星期。取值范围：1~7，如 1 表示周一。当一星期内需要创建多次自动快照时，可以传入多个时间点：
    * - 最多传入7个时间点。
    * - 多个时间点用半角逗号（,）隔开。
    * @example `1,2,3`
    */ "RepeatWeekdays": string;
    /**
    * 自动快照的创建时间点，单位为小时。取值范围：0~23，代表 00:00 至 23:00 共 24 个时间点，如 1 表示 01:00。当一天内需要创建多次自动快照时，可以传入多个时间点，多个时间点用半角逗号（,）隔开，最多传入24个时间点。
    * @example `0,1,…23`
    */ "TimePoints": string;
    /**
    * 文件系统类型，可选值：extreme。
    * @example `extreme`
    */ "FileSystemType": string;
    /**
    * 自动快照的保留时间，单位为天。默认值：-1。取值范围：
    * - -1：永久保存。
    * - 1~65536：指定保存天数。
    * @example `30`
    */ "RetentionDays"?: number;
    /**
    * 自动快照策略的名称。长度为 2~128 个英文或中文字符，必须以大小字母或中文开头，可包含数字、半角冒号（:）、下划线（_）或连字符（-），不能以 http:// 和 https:// 开头。默认值：空
    * @example `FinanceJoshua`
    */ "AutoSnapshotPolicyName"?: string;
}
export { CreateAutoSnapshotPolicyRequest };