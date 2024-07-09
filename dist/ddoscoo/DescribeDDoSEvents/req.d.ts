export interface DescribeDDoSEventsRequest {
    /**
     * DDoS高防实例在资源管理产品中所属的资源组ID。默认为空，即属于默认资源组。
     * @example `default`
     */
    "ResourceGroupId"?: string;
    /**
     * 查询结束时间。时间戳格式，单位：秒。
     * > 必须为整点分钟。
     * @example `1583683200`
     */
    "EndTime"?: number;
    /**
     * 查询开始时间。时间戳格式，单位：秒。
     * > 必须为整点分钟。
     * @example `1582992000`
     */
    "StartTime": number;
    /**
     * 页面显示的记录数量。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 分页查询请求时返回的页码。例如，查询第一页的返回结果，则填写**1**。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * DDoS高防实例的ID。
     * > 您可以调用[DescribeInstanceIds](~~157459~~)查询所有DDoS高防实例的ID信息。
     * @example `ddoscoo-cn-mp91j1ao****`
     */
    "InstanceIds": string[];
}
