export interface ListOnCallSchedulesRequest {
    /**
     * 排班策略名称。
     * @example `OnCallSchedule_test`
     */
    "Name"?: string;
    /**
     * 查询页数。
     * @example `1`
     */
    "Page": number;
    /**
     * 展示数目。
     * @example `20`
     */
    "Size": number;
}
