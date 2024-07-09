export interface ListCampaignTrendingReportRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 预测式外呼活动ID。
     * @example `6badb397-a8b5-40b6-21019d382a09`
     */
    "CampaignId": string;
    /**
     * 开始时间，非必填，默认为预测式外呼活动的开始时间。
     * @example `2021-10-14 00:00:00`
     */
    "StartTime"?: number;
    /**
     * 结束时间，非必填，默认为预测式外呼活动的结束时间。
     * @example `2021-10-14 20:59:59`
     */
    "EndTime"?: number;
}
