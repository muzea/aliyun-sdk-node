export interface DescribePostpayTrafficDetailRequest {
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 分页查询时，显示的每页数据的最大条数。默认值为10。可设置的最大值为50。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询时，显示的当前页的页码。
     * 默认值为1。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 设置查询开始时间。使用YYYYMMDD格式的日期表示。
     * @example `20240101`
     */
    "StartTime": string;
    /**
     * 设置查询结束时间。使用YYYYMMDD格式的日期表示。
     * @example `20240131`
     */
    "EndTime": string;
    /**
     * 资产的IP或者实例ID。
     * @example `192.0.XX.XX`
     */
    "SearchItem"?: string;
    /**
     * 统计流量的边界类型。必填。取值：
     *
     * - **EIP_TRAFFIC**：互联网边界流量。
     *
     * - **NatGateway_TRAFFIC**：NAT边界流量。
     * - **VPC_TRAFFIC**：VPC边界流量。
     * @example `VPC_TRAFFIC`
     */
    "TrafficType": string;
    /**
     * 按照指定的字段排序。取值：
     * - **resourceId**：资源ID。
     * - **trafficDay**：日期。
     * @example `resourceId`
     */
    "Order"?: string;
}
