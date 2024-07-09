export interface ListPopTrafficStatisticsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "Region"?: string;
    /**
     * 数据的起始时间。以秒为单位的UNIX时间戳。
     * @example `1681035708`
     */
    "StartTime"?: string;
    /**
     * 结束时间。以秒为单位的UNIX时间戳。
     * @example `1681293719`
     */
    "EndTime"?: string;
}
