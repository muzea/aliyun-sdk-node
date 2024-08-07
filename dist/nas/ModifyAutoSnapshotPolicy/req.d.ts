export interface ModifyAutoSnapshotPolicyRequest {
    /**
     * 目标自动快照策略ID。
     * 您可以调用DescribeAutoSnapshotPolicies查看您可用的自动快照策略。
     * @example `sp-extreme-233e6****`
     */
    "AutoSnapshotPolicyId": string;
    /**
     * 自动快照策略的名称。如果该参数为空则代表不修改策略名称。
     * 限制：
     * - 长度为2~128个英文或中文字符。
     * - 必须以大小字母或中文开头。
     * - 可包含数字、半角冒号（:）、下划线（_）或短划线（-），不能以`http://`和`https://`开头。
     * @example `FinanceJoshua`
     */
    "AutoSnapshotPolicyName"?: string;
    /**
     * 自动快照的重复日期。
     * 周期：星期。
     * 取值：1~7，例如：1表示周一。当一星期内需要创建多次自动快照时，可以传入多个时间点，多个时间点用半角逗号（,）隔开，最多支持传入7个时间点。
     * @example `1,7`
     */
    "RepeatWeekdays"?: string;
    /**
     * 自动快照的保留时间。
     * 单位：天
     * 取值：
     * - -1（默认）：永久保存。
     * - 1~65536：指定保存天数。
     * @example `30`
     */
    "RetentionDays"?: number;
    /**
     * 自动快照的创建时间点。
     * 单位：小时。
     * 取值：0~23，代表00:00至23:00共24个时间点，例如：1表示01:00。当一天内需要创建多次自动快照时，可以传入多个时间点，多个时间点半角逗号（,）隔开，最多支持传入24个时间点。
     * @example `0,1`
     */
    "TimePoints"?: string;
}
