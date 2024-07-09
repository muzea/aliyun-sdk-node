export interface CreateSnapshotRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云电脑ID。
     * @example `ecd-gx2x1dhsmucyy****"`
     */
    "DesktopId": string;
    /**
     * 快照的显示名称。长度为2\~127个英文或中文字符。必须以大小写字母或中文开头。可以包含数字、下划线（\_）或者短划线（-）。为防止和自动快照的名称冲突，不能以`auto`开头。
     * @example `testSnapshotName`
     */
    "SnapshotName": string;
    /**
     * 快照描述。长度不能超过128个英文或中文字符。
     * @example `testDescription`
     */
    "Description"?: string;
    /**
     * 要创建快照的磁盘类型。
     * @example `system`
     */
    "SourceDiskType": string;
}
