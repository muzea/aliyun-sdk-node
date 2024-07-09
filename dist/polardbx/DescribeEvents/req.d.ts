export interface DescribeEventsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 开始时间。
     * @example `2021-10-18T03:07:25Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间。
     * @example `2021-10-18T03:07:25Z`
     */
    "EndTime"?: string;
    /**
     * 页面大小。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 页面下标。
     * @example `1`
     */
    "PageNumber"?: number;
}
