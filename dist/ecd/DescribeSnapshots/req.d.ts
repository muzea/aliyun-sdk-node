export interface DescribeSnapshotsRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云电脑ID。
     * @example `ecd-gx2x1dhsmucyy****`
     */
    "DesktopId"?: string;
    /**
     * 云电脑名称。
     * @example `testName`
     */
    "DesktopName"?: string;
    /**
     * 快照ID。
     * @example `s-2ze81owrnv9pity4****`
     */
    "SnapshotId"?: string;
    /**
     * 快照的显示名称。长度为2\~127个英文或中文字符。必须以大小写字母或中文开头。可以包含数字、下划线（\_）或者短划线（-）。为防止和自动快照的名称冲突，不能以`auto`开头。
     * @example `test数据盘`
     */
    "SnapshotName"?: string;
    /**
     * 需制作快照的磁盘的云盘类型。
     * > 取值不区分大小写。
     * @example `system`
     */
    "SourceDiskType"?: string;
    /**
     * 快照类型。
     * @example `user`
     */
    "SnapshotType"?: string;
    /**
     * 创建者。
     * @example `Administrator`
     */
    "Creator"?: string;
    /**
     * 快照创建的开始时间。按照[ISO 8601](~~25696~~)标准表示，并使用UTC+0时间，格式为`yyyy-mm-ddthh:mm:ssz`。
     * @example `2020-11-30T06:32:31Z`
     */
    "StartTime"?: string;
    /**
     * 快照创建的结束时间。按照[ISO 8601](~~25696~~)标准表示，并使用UTC+0时间，格式为`yyyy-mm-ddthh:mm:ssz`。
     * @example `2020-11-31T06:32:31Z`
     */
    "EndTime"?: string;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
     * @example `8051af8d01b5479bec9f5ddf02e4a8fbd0ab6e7e43f8****`
     */
    "NextToken"?: string;
    /**
     * 分页查询时每页行数。
     * - 最大值：100。
     * - 默认值：10。
     * @example `10`
     */
    "MaxResults"?: number;
}
