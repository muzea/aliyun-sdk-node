export interface ListApplicationMonitorDetectResultRequest {
    /**
     * 全球加速实例所属的地域，仅取值：**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 列表的页码。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的行数。最大值：**100**。默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 源站探测任务ID。
     * @example `sm-bp1fpdjfju9k8yr1y****`
     */
    "TaskId"?: string;
    /**
     * 源站探测任务待查询时间段的起始时间。Unix时间戳格式，表示从1970-01-01 00:00:00 UTC计算起的秒数。
     * @example `1638288000`
     */
    "BeginTime": number;
    /**
     * 源站探测任务待查询时间段的截止时间。Unix时间戳格式，表示从1970-01-01 00:00:00 UTC计算起的秒数。
     * @example `1640164683`
     */
    "EndTime": number;
}
