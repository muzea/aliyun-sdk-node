export interface PreviewGtmRecoveryPlanRequest {
    /**
     * 用户语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 容灾预案ID。
     * @example `100`
     */
    "RecoveryPlanId": number;
    /**
     * 当前页数，起始值为**1**，默认为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，最大值**20**，默认为**5**。
     * @example `5`
     */
    "PageSize"?: number;
}
