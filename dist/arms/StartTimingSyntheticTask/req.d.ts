export interface StartTimingSyntheticTaskRequest {
    /**
     * 地域ID。默认为`cn-hangzhou`。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 任务ID列表。
     */
    "TaskIds"?: string[];
}
