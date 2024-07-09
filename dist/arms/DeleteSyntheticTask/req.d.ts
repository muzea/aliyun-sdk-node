export interface DeleteSyntheticTaskRequest {
    /**
     * 地域ID。默认为cn-hangzhou。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 任务ID列表。
     */
    "TaskIds": string[];
}
