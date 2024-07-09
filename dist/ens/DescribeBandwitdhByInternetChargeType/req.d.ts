export interface DescribeBandwitdhByInternetChargeTypeRequest {
    /**
     * 获取数据的起始时间点。
     * - 按照ISO8601标准表示，并需要使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * - 如果秒不是00，则自动取为下一分钟开始时。
     * @example `2021-11-15T16:00:00Z`
     */
    "StartTime": string;
    /**
     * 获取数据的结束时间点。
     * - 按照ISO8601标准表示，并需要使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * - 如果秒不是00，则自动取为下一分钟开始时。
     * @example `2022-01-18T09:39:54Z`
     */
    "EndTime": string;
    /**
     * 运营商，取值如下所示：
     * - cmcc：移动。
     * - telecom：电信。
     * - unicom：联通。
     * - multiCarrier：多线。
     * @example `unicom`
     */
    "Isp"?: string;
    /**
     * 实例所属地域ID。
     * @example `cn-hangzhou-cbn-2`
     */
    "EnsRegionId"?: string;
}
