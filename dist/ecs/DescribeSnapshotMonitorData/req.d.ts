export interface DescribeSnapshotMonitorDataRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 获取快照容量变化数据的起始时间点。按照[ISO 8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。如果指定的秒（ss）不是 00，则自动换算为下一分钟。
     * @example `2019-05-10T00:00:00Z`
     */
    "StartTime": string;
    /**
     * 获取快照容量变化数据的结束时间点。按照[ISO 8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。如果指定的秒（ss）不是 00，则自动换算为下一分钟。
     * @example `2019-05-10T03:00:00Z`
     */
    "EndTime": string;
    /**
     * 获取快照容量变化数据的间隔时间，单位为秒。取值范围：
     * - 60
     * - 600
     * - 3600
     * 默认值：60。
     * @example `60`
     */
    "Period"?: number;
    /**
     * 快照类型。取值范围：
     * - Standard：普通快照。
     * - Flash：本地快照。
     * 默认值：Standard。
     * @example `Standard`
     */
    "Category"?: string;
}
