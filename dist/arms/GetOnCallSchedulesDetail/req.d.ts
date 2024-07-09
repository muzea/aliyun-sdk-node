export interface GetOnCallSchedulesDetailRequest {
    /**
     * 排班策略ID。
     * @example `1234`
     */
    "Id": number;
    /**
     * 开始值班时间，格式为`yyyy-MM-dd`。
     * @example `2022-10-01`
     */
    "StartTime"?: string;
    /**
     * 结束值班时间，格式为`yyyy-MM-dd`。
     * @example `2022-10-30`
     */
    "EndTime"?: string;
}
