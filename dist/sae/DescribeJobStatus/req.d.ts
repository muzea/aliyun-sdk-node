export interface DescribeJobStatusRequest {
    /**
     * 任务模板ID。
     * @example `e1a7a07-abcb-4652-a1d3-2d57f415****`
     */
    "AppId": string;
    /**
     * 任务ID。
     * @example `event-b798157b-40a2-4388-b578-71fb897103**-**`
     */
    "JobId"?: string;
}
