export interface DescribeEnsRegionIdResourceRequest {
    /**
     * 起始时间点。按照ISO8601标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2020-06-16T06:33:15Z`
     */
    "StartTime": string;
    /**
     * 结束时间点。按照ISO8601标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ss。
     * @example `2020-06-16T06:33:15`
     */
    "EndTime": string;
    /**
     * 升序：asc，降序：desc。目前只支持以下三个参数：
     * - InstanceCount：desc。
     * - Area：asc。
     * - InternetBandwidth：asc。
     * @example `InstanceCount：desc`
     */
    "OrderByParams"?: string;
    /**
     * 实例状态列表的页码，起始值为：**1**，默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，最大值为**100** 行，默认值：**10**。
     * @example `10`
     */
    "PageSize"?: string;
    /**
     * 运营商，取值如下所示：
     * - cmcc：移动。
     * - telecom：电信。
     * - unicom：联通。
     * - multiCarrier：多线。
     * @example `cmcc`
     */
    "Isp"?: string;
}
