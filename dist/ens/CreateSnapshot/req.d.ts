export interface CreateSnapshotRequest {
    /**
     * 云盘ID。
     * @example `d-bp1s5fnvk4gn2tws0****`
     */
    "DiskId": string;
    /**
     * ENS节点ID，可通过[DescribeEnsRegions](~~DescribeEnsRegions~~)查询节点ID。
     * @example `cn-shenzhen-3`
     */
    "EnsRegionId": string;
    /**
     * 快照的显示名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以`http://`或`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * @example `testSnapshotName`
     */
    "SnapshotName"?: string;
    /**
     * 快照的描述。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。
     * 默认值：空。
     * @example `testDescription`
     */
    "Description"?: string;
}
