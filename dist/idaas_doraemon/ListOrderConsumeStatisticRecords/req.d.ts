export interface ListOrderConsumeStatisticRecordsRequest {
    /**
     * 阿里云订单编号
     * @example `211283925690732`
     */
    "AliOrderCode"?: string;
    /**
     * 统计日期最小值
     * @example `2022-05-31`
     */
    "StatisticTimeMin"?: string;
    /**
     * 统计日期最大值，默认为昨天
     * @example `2022-05-31`
     */
    "StatisticTimeMax"?: string;
    /**
     * 页码
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页记录数
     * @example `10`
     */
    "PageSize"?: number;
    "ApplicationExternalId"?: string;
    "ServiceCode"?: string;
}
