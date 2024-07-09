export interface DescribeEpnMeasurementDataRequest {
    /**
     * 开始时间。使用utc时间表示，格式为yyyy-mm-ddthh:mm:ssz。
     * @example `2021-09-30T16:00:00Z`
     */
    "StartDate": string;
    /**
     * 结束时间，使用UTC时间格式，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2022-01-30T16:00:00Z`
     */
    "EndDate": string;
}
