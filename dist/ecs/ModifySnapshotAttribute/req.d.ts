export interface ModifySnapshotAttributeRequest {
    /**
     * 快照ID。
     * @example `s-bp199lyny9bb47pa****`
     */
    "SnapshotId": string;
    /**
     * 快照的显示名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
     * 为防止和自动快照的名称冲突，不能以auto开头。
     * @example `testSnapshotName`
     */
    "SnapshotName"?: string;
    /**
     * 快照的描述。长度为2~256个英文或中文字符，不能以http://和https://开头。
     * @example `testDescription`
     */
    "Description"?: string;
    /**
     * 关闭快照极速可用功能。取值范围：
     * - true：关闭快照极速可用。
     * - false：不关闭快照极速可用。
     * 默认值：false。
     * >该参数已弃用。ESSD云盘普通快照已升级为[默认极速可用](~~193667~~)，您无需额外配置，且不产生额外花销。
     * @example `false`
     */
    "DisableInstantAccess"?: boolean;
    /**
     * 快照保留天数。设置该值时，快照保留时间会从快照**创建时间**(按照ISO 8601标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ)开始计算。取值范围：1~65536。
     * >快照保留时间仅支持延长，不支持缩短快照已有保留时间。
     * @example `10`
     */
    "RetentionDays"?: number;
}
