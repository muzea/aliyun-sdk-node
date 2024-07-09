export interface DescribeDiskMonitorDataRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云盘ID。
     * @example `d-bp67acfmxazb4p****`
     */
    "DiskId": string;
    /**
     * 获取云盘的秒级监控数据的起始时间点。按照[ISO 8601](~~25696~~)标准表示，并使用UTC +0时间，格式为`yyyy-MM-ddTHH:mm:ssZ`。
     * @example `2022-06-01T03:00:00Z`
     */
    "StartTime": string;
    /**
     * 获取云盘的秒级监控数据的结束时间点。按照[ISO 8601](~~25696~~)标准表示，并使用UTC+0时间，格式为`yyyy-MM-ddTHH:mm:ssZ`。
     * @example `2022-06-01T05:00:00Z`
     */
    "EndTime": string;
    /**
     * 获取云盘的秒级监控数据的间隔时间。单位：秒。取值范围：
     * - 5。
     * - 60。
     * 默认值：5。
     * @example `5`
     */
    "Period"?: number;
    /**
     * 磁盘监控数据类型。取值范围：
     * - basic：基础性能数据。
     * - pro：包含Burst IO数据。
     * @example `basic`
     */
    "Type"?: string;
}
