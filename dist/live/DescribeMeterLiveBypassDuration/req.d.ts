export interface DescribeMeterLiveBypassDurationRequest {
    /**
     * 获取数据起始时间点，日期格式按照ISO8601表示法，并使用UTC时间，格式为：YYYY-MM-DDThh:mm:ssZ。
     * @example `2022-10-10T20:00:00Z`
     */
    "StartTime": string;
    /**
     * 结束时间需大于起始时间，查询粒度≥5分钟且≤31天；日期格式按照ISO8601表示法，并使用UTC时间，格式为：YYYY-MM-DDThh:mm:ssZ。
     * @example `2022-10-10T21:00:00Z`
     */
    "EndTime": string;
    /**
     * 应用ID。
     * @example `4346289a-a790-4869-9e23-22766d5e****`
     */
    "AppId": string;
    /**
     * 查询数据的时间粒度。单位：秒。取值：
     * - 300
     * - 3600
     * - 86400
     * 不传或传值不支持时，使用默认值3600秒。
     * @example `86400`
     */
    "Interval"?: string;
}
