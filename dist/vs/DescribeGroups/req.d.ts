export interface DescribeGroupsRequest {
    /**
     * 空间ID。
     * @example `33763950877224964-cn-qingdao`
     */
    "Id"?: string;
    /**
     * 空间名称。
     * @example `我的视频监控`
     */
    "Name"?: string;
    /**
     * 空间所属区域，即服务中心。
     * @example `cn-qingdao`
     */
    "Region"?: string;
    /**
     * 空间使用的接入协议。取值范围：
     * - gb28181
     * - rtmp
     * @example `rtmp`
     */
    "InProtocol"?: string;
    /**
     * 空间状态。取值范围：
     * - on（已启用）
     * - off（已停用）
     * @example `on`
     */
    "Status"?: string;
    /**
     * 按字段排序。取值范围：
     * - Id（默认）
     * @example `Id`
     */
    "SortBy"?: string;
    /**
     * 排序方式。取值范围：
     * - asc（升序）（默认值）
     * - desc（降序）
     * @example `asc`
     */
    "SortDirection"?: string;
    /**
     * 分页大小。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 第几页。默认：1。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 是否返回空间设备统计信息。默认值：false。
     * @example `false`
     */
    "IncludeStats"?: boolean;
}
