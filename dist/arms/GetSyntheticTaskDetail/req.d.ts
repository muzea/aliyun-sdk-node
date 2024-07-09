export interface GetSyntheticTaskDetailRequest {
    /**
     * 地域ID。默认为cn-hangzhou。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 云拨测任务ID。
     * @example `123`
     */
    "TaskId": string;
}
