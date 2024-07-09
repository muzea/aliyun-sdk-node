export interface QuerySpaceUsageRequest {
    /**
     * 服务空间ID。
     * @example `mp-fd37e37e-b436-4a7a-****-58c89ce3586d`
     */
    "SpaceId": string;
    /**
     * 起始时间，UTC。
     * @example `2022-06-17T16:00:00Z`
     */
    "StartTime": string;
    /**
     * 结束时间，UTC。
     * - 结束时间必须晚于开始时间。
     * - 当时间范围不超过一天时，自动返回小时级别计量数据。
     * @example `2022-06-18T16:00:00Z`
     */
    "EndTime": string;
    /**
     * 可选字段。当缺少该字段时根据查询时间跨度返回不同粒度数据。大于一天按天返回，小于等于一天按小时返回。
     * 查询数据的时间粒度。单位：分钟。取值：
     * - 1440（按天返回，跨度不超过31天）。
     * - 60（按小时返回，跨度不超过7天）。
     * - 5（按五分钟返回，跨度不超过1天）。
     * @example `60`
     */
    "Interval"?: number;
}
