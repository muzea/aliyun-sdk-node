export interface DescribeEventsRequest {
    /**
     * 环境ID，将查询此环境上的事件
     * @example `we-5d1dac8e08350d1dd94*****`
     */
    "EnvId"?: string;
    /**
     * 查询事件的开始时间戳
     * @example `1562225800000`
     */
    "StartTime"?: number;
    /**
     * 查询事件的结束时间戳
     * @example `1562225909800`
     */
    "EndTime"?: number;
    /**
     * 查询页面大小
     * @example `1`
     */
    "PageSize"?: number;
    /**
     * 查询页面数量
     * @example `10`
     */
    "PageNumber"?: number;
    /**
     * 变更ID
     * @example `wc-d2eeaaa1405481bdd8cb92c*****`
     */
    "ChangeId"?: string;
    /**
     * 最近更新事件
     * @example `true`
     */
    "LastChangeEvents"?: boolean;
    /**
     * 返回列表是否按时间戳倒序排序
     * @example `true`
     */
    "ReverseByTimestamp"?: boolean;
    "RegionId"?: string;
}
