export interface ModifySnapshotAttributeRequest {
    /**
     * 快照ID。
     * @example `sp-bp199lyny9bb47pa****`
     */
    "SnapshotId": string;
    /**
     * 快照的显示名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以`http://`和`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
     * 为防止和自动快照的名称冲突，不能以**auto**开头。
     * @example `testSnapshotName`
     */
    "SnapshotName"?: string;
    /**
     * 快照的描述。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。
     * @example `testDescription`
     */
    "Description"?: string;
}
