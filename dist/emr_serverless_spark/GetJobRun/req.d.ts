export interface GetJobRunRequest {
    /**
     * 工作空间ID。
     * @example `w-d2d82aa09155****`
     */
    "workspaceId": string;
    /**
     * 任务运行ID。
     * @example `jr-93d98d2f7061****`
     */
    "jobRunId": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "regionId"?: string;
}
