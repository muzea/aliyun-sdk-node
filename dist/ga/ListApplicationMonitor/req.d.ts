export interface ListApplicationMonitorRequest {
    /**
     * 全球加速实例所属的地域，仅取值：**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 列表的页码。默认值：**1**。
     * @example `１`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的行数。最大值：**100**。默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 源站探测任务搜索关键字。支持按照URL、IP地址、全球加速实例ID和监听ID模糊搜索。
     * @example `aliyun`
     */
    "SearchValue"?: string;
}
