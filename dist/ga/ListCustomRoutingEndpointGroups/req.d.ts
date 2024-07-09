export interface ListCustomRoutingEndpointGroupsRequest {
    /**
     * 全球加速实例所在的地域ID，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 列表的页码。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的条目数。最大值：**50**。默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 全球加速实例ID。
     * @example `ga-bp1odcab8tmno0hdq****`
     */
    "AcceleratorId": string;
    /**
     * 自定义路由类型监听ID。
     * @example `lsr-bp1bpn0kn908w4nbw****`
     */
    "ListenerId"?: string;
    /**
     * 终端节点组ID。
     * @example `epg-bp14sz7ftcwwjgrdm****`
     */
    "EndpointGroupId"?: string;
    /**
     * 是否开启了访问日志。取值：
     *   **on**：已开启访问日志。
     * 该参数为空时，不进行筛选，返回所有终端节点组。
     * @example `on`
     */
    "AccessLogSwitch"?: string;
}
