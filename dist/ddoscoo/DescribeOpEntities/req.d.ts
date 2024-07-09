export interface DescribeOpEntitiesRequest {
    /**
     * DDoS高防实例在资源管理产品中所属的资源组ID。默认为空，即属于默认资源组。
     * @example `default`
     */
    "ResourceGroupId"?: string;
    /**
     * 使用操作对象筛选结果，传入要查询的操作对象的类型。取值：
     * - **1**：DDoS高防IP
     * - **2**：DDoS高防抗D包
     * - **3**：ECS实例
     * - **4**：全量日志
     * @example `1`
     */
    "EntityType"?: number;
    /**
     * 使用操作对象筛选结果，传入要查询的操作对象。
     * @example `203.***.***.132`
     */
    "EntityObject"?: string;
    /**
     * 查询开始时间。时间戳格式，单位：毫秒。
     * > 查询时间的跨度不允许超过近30天。
     * @example `1582992000000`
     */
    "StartTime": number;
    /**
     * 查询结束时间。时间戳格式，单位：毫秒。
     * > 查询时间的跨度不允许超过近30天。
     * @example `1583683200000`
     */
    "EndTime": number;
    /**
     * 分页查询请求时返回的页码。例如，查询第一页的返回结果，则填写**1**。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 页面显示的记录数量。最大值：**50**。
     * @example `10`
     */
    "PageSize": number;
}
