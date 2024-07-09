export interface CreateSnapshotRequest {
    /**
     * 极速型NAS高级型文件系统ID。必须以`extreme-`开头，例如`extreme-01dd****`
     * @example `extreme-01dd****`
     */
    "FileSystemId": string;
    /**
     * 快照名称。
     * 限制：
     * - 长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`和`https://`开头。
     * - 可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * - 为防止和自动快照的名称冲突，不能以auto开头。
     * @example `FinanceJoshua`
     */
    "SnapshotName"?: string;
    /**
     * 快照说明。
     * 限制：
     * - 长度为2~256个英文或中文字符。
     * - 不能以`http://`和`https://`开头。
     * - 默认为空。
     * @example `FinanceDepet`
     */
    "Description"?: string;
    /**
     * 快照的保留时间。
     * 单位：天
     * 取值：
     * - -1（默认值）：永久保存，当快照数量达到额度上限后被自动删除。
     * - 1~65536：指定保存天数，保留时间到期后快照会被自动释放。
     * @example `30`
     */
    "RetentionDays"?: number;
}
