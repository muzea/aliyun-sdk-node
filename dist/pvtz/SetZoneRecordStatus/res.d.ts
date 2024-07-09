export interface SetZoneRecordStatusResponse {
    /**
     * 当前解析记录状态。
     * @example `ENABLE`
     */
    Status: string;
    /**
     * 请求ID。
     * @example `39CB16E5-4180-49F2-A060-23C0ECEB80D9`
     */
    RequestId: string;
    /**
     * 解析记录ID。
     * @example `2075410525`
     */
    RecordId: number;
}
