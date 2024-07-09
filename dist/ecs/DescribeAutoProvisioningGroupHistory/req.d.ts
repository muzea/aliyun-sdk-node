export interface DescribeAutoProvisioningGroupHistoryRequest {
    /**
     * 弹性供应组所在地域的ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 分页查询的当前页码。起始值：1
     * 默认值：1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。最大值：100
     * 默认值：10
     * @example `5`
     */
    "PageSize"?: number;
    /**
     * 弹性供应组的ID。
     * @example `apg-bp67acfmxazb4p****`
     */
    "AutoProvisioningGroupId": string;
    /**
     * 查询调度历史的起始时间。按照[ISO8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2019-04-01T15:10:20Z`
     */
    "StartTime"?: string;
    /**
     * 查询调度历史的结束时间。按照[ISO8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2019-06-20T15:10:20Z`
     */
    "EndTime"?: string;
}
