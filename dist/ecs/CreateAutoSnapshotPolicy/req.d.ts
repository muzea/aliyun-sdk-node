interface CreateAutoSnapshotPolicyRequest {
    "RegionId"?: string;
    /**
    * 自动快照策略所属的地域。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "regionId": string;
    /**
    * 自动快照的创建时间点，单位为小时。取值范围：0~23，代表00:00至23:00共24个时间点，如1表示01:00。
    * 当一天内需要创建多次自动快照时，可以传入多个时间点，最多传入24个时间点。
    * @example `["0", "1", … "23"]`
    */ "timePoints": string;
    /**
    * 自动快照的重复日期，单位为天，周期为星期。取值范围：1~7，如1表示周一。
    * 当一星期内需要创建多次自动快照时，可以传入多个时间点：
    * - 最多传入7个时间点。
    * - 多个时间点用一个格式类似`"1", "2", … "7"`的JSON数组表示，时间点之间用半角逗号（,）隔开。
    * @example `"1"`
    */ "repeatWeekdays": string;
    /**
    * 自动快照的保留时间，单位为天。取值范围：
    * - -1：永久保存。
    * - 1~65536：指定保存天数。
    * 默认值：-1
    * @example `30`
    */ "retentionDays": number;
    "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 自动快照策略的名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
    * 默认值：空
    * @example `FinanceJoshua`
    */ "autoSnapshotPolicyName"?: string;
}
export { CreateAutoSnapshotPolicyRequest };