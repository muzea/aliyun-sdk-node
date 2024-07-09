export interface CopySnapshotRequest {
    /**
     * 源快照ID。
     * @example `sp-bp1c0doj0taqyzzl****`
     */
    "SnapshotId": string;
    /**
     * 目的节点ID列表。
     */
    "DestinationRegionIds": string[];
    /**
     * 快照的显示名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以`http://`或`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * @example `testSnapshotName`
     */
    "DestinationSnapshotName"?: string;
    /**
     * 快照的描述。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。
     * @example `testDescription`
     */
    "DestinationSnapshotDescription"?: string;
}
