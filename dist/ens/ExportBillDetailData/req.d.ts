export interface ExportBillDetailDataRequest {
    /**
     * 开始时间，使用UTC时间格式，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2020-06-01T00:00:00Z`
     */
    "StartDate": string;
    /**
     * 结束时间，使用UTC时间格式，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2020-08-30T00:00:00Z`
     */
    "EndDate": string;
}
