export interface DescribeVsDevicesDataRequest {
    /**
     * 按空间ID查询。
     * @example `348*****174-cn-qingdao`
     */
    "GroupId"?: string;
    /**
     * 获取数据的起始时间。
     * > - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ
     * > - 最小数据粒度为5分钟。
     * > - 不填的话，默认读取过去 24 小时数据。
     * @example `2022-01-04T16:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取数据的结束时间，需要大于起始时间。
     * > - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ
     * > - 最小数据粒度为5分钟。
     * > - 不填的话，默认读取过去 24 小时数据。
     * @example `2022-01-30T16:00:00Z`
     */
    "EndTime"?: string;
}
