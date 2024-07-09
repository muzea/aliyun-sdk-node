export interface ExportMeasurementDataRequest {
    /**
     * 开始时间。使用utc时间表示，格式为yyyy-mm-ddthh:mm:ssz。
     * @example `2019-06-01T00:00:00Z`
     */
    "StartDate": string;
    /**
     * 结束时间，使用UTC时间格式，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2021-10-30T16:00:00Z`
     */
    "EndDate": string;
}
