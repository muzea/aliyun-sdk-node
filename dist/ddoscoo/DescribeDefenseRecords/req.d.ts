export interface DescribeDefenseRecordsRequest {
    /**
     * DDoS高防实例在资源管理产品中所属的资源组ID。默认为空，即属于默认资源组。
     * @example `default`
     */
    "ResourceGroupId"?: string;
    /**
     * DDoS高防实例的ID。
     * > 您可以调用[DescribeInstanceIds](~~157459~~)查询所有DDoS高防实例的ID信息。
     * @example `ddoscoo-cn-mp91j1ao****`
     */
    "InstanceId"?: string;
    /**
     * 查询开始时间。时间戳格式，单位：毫秒。
     * > 查询时间的跨度不允许超过近90天。
     * @example `1582992000000`
     */
    "StartTime": number;
    /**
     * 查询结束时间。时间戳格式，单位：毫秒。
     * > 查询时间的跨度不允许超过90天。
     * @example `1583683200000`
     */
    "EndTime": number;
    /**
     * 分页查询请求时返回的页码。例如，查询第一页的返回结果，则填写**1**。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 页面显示的记录数量。最大值：**50**
     * @example `10`
     */
    "PageSize": number;
}
