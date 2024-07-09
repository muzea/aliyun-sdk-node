export interface DescribeRecoverableTimeRangeResponse {
    /**
     * 可恢复的开始时间。
     * @example `2020-10-26T18:02:03Z`
     */
    TimeBegin: string;
    /**
     * 可恢复的最后时间。
     * @example `2020-11-05T01:20:31Z`
     */
    TimeEnd: string;
    /**
     * 请求id。
     * @example `A1A51D18-96DC-465C-9F1B-47180CA22524`
     */
    RequestId: string;
}
