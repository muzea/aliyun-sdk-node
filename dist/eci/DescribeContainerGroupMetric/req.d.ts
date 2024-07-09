export interface DescribeContainerGroupMetricRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * ECI实例ID，即容器组ID。
     * @example `eci-bp17da5olmkuagfr****`
     */
    "ContainerGroupId": string;
    /**
     * 查询某个时间段内的监控数据时，设置的开始时间。取值必须为30天之内，默认为EndTime减去5分钟。
     * 格式为RFC3339时间格式。例如：北京时间2019年03月12号上午9点整可以表示为2019-03-12T09:00:00.000+08:00或者2019-03-12T01:00:00.000Z
     * @example `2019-03-12T01:00:00.000Z`
     */
    "StartTime"?: string;
    /**
     * 查询某个时间段内的监控数据时，设置的结束时间。默认为当前时间。
     * 格式为RFC3339时间格式。
     * @example `2019-09-12T01:05:00.000Z  `
     */
    "EndTime"?: string;
    /**
     * 数据聚合周期，单位为秒。目前只支持15、30、60和600秒。默认为60秒。
     * > 如果StartTime和EndTime均没有设置，则默认获取最新5分钟的监控数据，默认聚合周期为15S，传入的Period将被忽略。
     * @example `15`
     */
    "Period"?: string;
}
