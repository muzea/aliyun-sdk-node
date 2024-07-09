export interface ListAlarmHistoriesRequest {
    /**
     * 用来标记开始查询数据的位置。置空表示从头开始。
     * @example `1`
     */
    "NextToken"?: string;
    /**
     * 本次查询最大记录条数。
     * 取值范围：1~200。默认值：30。
     * @example `30`
     */
    "MaxResults"?: number;
    /**
     * 查询关键字。
     * @example `数量`
     */
    "Keyword"?: string;
    /**
     * 查询开始时间。
     * @example `20201020`
     */
    "StartTime"?: number;
    /**
     * 查询结束时间。
     * @example `20201024`
     */
    "EndTime"?: number;
    /**
     * 云服务名称缩写。
     * > 关于支持配额中心的云服务，请参见[支持配额中心的云服务](~~182368~~)。
     * @example `ecs`
     */
    "ProductCode"?: string;
    /**
     * 告警ID。
     * @example `18b3be23-b7b0-4d45-91bc-d0c331aa****`
     */
    "AlarmId"?: string;
}
