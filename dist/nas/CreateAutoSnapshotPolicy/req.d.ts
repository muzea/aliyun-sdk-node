export interface CreateAutoSnapshotPolicyRequest {
    /**
     * 自动快照的重复日期。
     * 周期：星期
     * 取值：1~7，依次表示周一至周日。
     * 如果一星期内需要创建多次自动快照时，可设置多个时间点，多个时间点用半角逗号（,）隔开，最多设置7个时间点。
     * @example `1,2,3`
     */
    "RepeatWeekdays": string;
    /**
     * 自动快照的创建时间点。
     * 单位：小时
     * 取值：0~23，代表00:00至23:00共24个时间点，例如：1表示01:00。
     * 当一天内需要创建多次自动快照时，可以设置多个时间点，多个时间点用半角逗号（,）隔开，最多支持设置24个时间点。
     * @example `0,1,…,23`
     */
    "TimePoints": string;
    /**
     * 自动快照的保留时间。
     * 单位：天
     * 取值：
     * - -1（默认值）：永久保存，当快照数量达到额度上限后被自动删除。
     * - 1~65536：指定保存天数，保留时间到期后快照会被自动释放。
     * @example `30`
     */
    "RetentionDays"?: number;
    /**
     * 自动快照策略的名称。
     * 限制：
     * - 长度为2~128个英文或中文字符。
     * - 必须以大小写字母或中文开头。
     * - 可包含数字、半角冒号（:）、下划线（_）或短划线（-），不能以`http://`和`https://`开头。
     * - 默认为空。
     * @example `FinanceJoshua`
     */
    "AutoSnapshotPolicyName"?: string;
    /**
     * 文件系统类型。
     * 取值：extreme（极速型NAS）
     * @example `extreme`
     */
    "FileSystemType": string;
}
